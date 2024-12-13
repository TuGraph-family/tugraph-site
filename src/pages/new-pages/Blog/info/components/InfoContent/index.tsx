import FooterInfo from '@/pages/new-pages/Blog/list/components/FooterInfo';
import { Breadcrumb, Divider } from 'antd';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import styles from './index.less';
import rehypeSlug from 'rehype-slug';
import rehypeRaw from 'rehype-raw';
import { historyPushLinkAt, slugify } from '@/util';
import { history } from 'umi';

const InfoContent = ({ detail }: { detail?: API.BlogDetailVO }) => {
  return (
    <div className={styles.InfoContent}>
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
      <div className={styles.InfoContentText}>
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
          }}
        >
          {detail?.content || ''}
        </ReactMarkdown>
      </div>

      <div className={styles.footer}>
        {detail?.lastCommentId ? (
          <div
            className={styles.lastBtn}
            onClick={() =>
              history.push(
                historyPushLinkAt(`/blog/info/${detail?.lastCommentId}`),
              )
            }
          >
            <div>上一篇</div>
            <div className={styles.title}>{detail?.lastCommentTitle}</div>
          </div>
        ) : (
          <div />
        )}
        {detail?.nextCommentId ? (
          <div
            className={styles.nextBtn}
            onClick={() =>
              history.push(
                historyPushLinkAt(`/blog/info/${detail?.nextCommentId}`),
              )
            }
          >
            <div>下一篇</div>
            <div className={styles.title}>{detail?.nextCommentTitle}</div>
          </div>
        ) : (
          <div />
        )}
      </div>
    </div>
  );
};

export default InfoContent;
