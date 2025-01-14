import FooterInfo from '@/pages/new-pages/Blog/list/components/FooterInfo';
import { Breadcrumb } from 'antd';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import styles from './index.less';
import rehypeSlug from 'rehype-slug';
import rehypeRaw from 'rehype-raw';
import { historyPushLinkAt, slugify } from '@/util';
import { history } from 'umi';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import cx from 'classnames';
import { renderCard } from '@/util/render-card';

const InfoContent = ({
  detail,
  isOldBlog,
}: {
  detail?: API.BlogDetailVO;
  isOldBlog?: boolean;
}) => {
  return (
    <div className={cx(styles.InfoContent)}>
      <Breadcrumb>
        <Breadcrumb.Item>
          <a onClick={() => history.push(historyPushLinkAt('/blog/list'))}>
            博客
          </a>
        </Breadcrumb.Item>
        <Breadcrumb.Item>详情</Breadcrumb.Item>
      </Breadcrumb>
      <div className={styles.InfoContentTitle}>{detail?.title}</div>
      <FooterInfo
        time={detail?.publishTime}
        creatorName={detail?.creatorName}
        tag={detail?.categories}
      />
      <div
        className={cx(
          styles.InfoContentText,
          isOldBlog ? styles.oldBlog : styles.newBlog,
        )}
      >
        <ReactMarkdown
          remarkPlugins={[remarkGfm]}
          rehypePlugins={[rehypeRaw, rehypeSlug]}
          components={{
            h1: ({ node, ...props }) => {
              return (
                <h1 id={slugify(props.id)} {...props}>
                  {props.children}
                </h1>
              );
            },
            h2: ({ node, ...props }) => (
              <h2 id={slugify(props.id)} {...props}>
                {props.children}
              </h2>
            ),
            h3: ({ node, ...props }) => (
              <h3 id={slugify(props.id)} {...props}>
                {props.children}
              </h3>
            ),
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
          {detail?.content || ''}
        </ReactMarkdown>
      </div>
      <div className={styles.footer}>
        {detail?.nextCommentId ? (
          <div
            className={styles.nextBtn}
            onClick={() =>
              history.push(
                historyPushLinkAt(`/blog/info/${detail?.nextCommentId}`),
              )
            }
          >
            <div>上一篇</div>
            <div className={styles.title}>{detail?.nextCommentTitle}</div>
          </div>
        ) : (
          <div />
        )}
        {detail?.lastCommentId ? (
          <div
            className={styles.lastBtn}
            onClick={() =>
              history.push(
                historyPushLinkAt(`/blog/info/${detail?.lastCommentId}`),
              )
            }
          >
            <div>下一篇</div>
            <div className={styles.title}>{detail?.lastCommentTitle}</div>
          </div>
        ) : (
          <div />
        )}
      </div>
    </div>
  );
};

export default InfoContent;
