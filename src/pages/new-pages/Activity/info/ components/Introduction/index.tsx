import { SubTitle } from '@/components/SubTitle';
import ReactMarkdown from 'react-markdown';
import rehypeRaw from 'rehype-raw';
import remarkGfm from 'remark-gfm';
import styles from './index.less';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
const Introduction = ({ markdown }: { markdown?: string }) => {
  return (
    <div className={styles.activityInfo}>
      <SubTitle title="活动简介" isAnimate={false} />
      <div className={styles.markdownContent}>
        <ReactMarkdown
          remarkPlugins={[remarkGfm]}
          rehypePlugins={[rehypeRaw]}
          components={{
            code({ node, inline, className, children, ...props }) {
              const match = /language-(\w+)/.exec(className || '');
              return !inline && match ? (
                <SyntaxHighlighter
                  {...props}
                  children={String(children).replace(/\n$/, '')}
                  language={match[1]}
                  PreTag="div"
                />
              ) : (
                <code {...props} className={className}>
                  {children}
                </code>
              );
            },
          }}
        >
          {markdown || ''}
        </ReactMarkdown>
      </div>
    </div>
  );
};

export default Introduction;
