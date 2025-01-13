import { SubTitle } from '@/components/SubTitle';
import ReactMarkdown from 'react-markdown';
import rehypeRaw from 'rehype-raw';
import remarkGfm from 'remark-gfm';
import styles from './index.less';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { renderCard } from '@/util/render-card';
import cx from 'classnames';

const Introduction = ({
  markdown,
  isOld,
}: {
  markdown?: string;
  isOld?: boolean;
}) => {
  return (
    <div className={styles.activityInfo}>
      <SubTitle title="活动简介" isAnimate={false} />
      <div
        className={cx(
          styles.markdownContent,
          isOld ? styles.oldBlog : styles.newBlog,
        )}
      >
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
            card: renderCard,
          }}
        >
          {markdown || ''}
        </ReactMarkdown>
      </div>
    </div>
  );
};

export default Introduction;
