import FooterInfo from '@/pages/new-pages/Blog/list/components/FooterInfo';
import { Breadcrumb } from 'antd';
import ReactMarkdown from 'react-markdown';
import styles from './index.less';
import rehypeSlug from 'rehype-slug';
import { slugify } from '@/util';

const InfoContent = ({ markdown }: { markdown?: string }) => {
  return (
    <div className={styles.InfoContent}>
      <Breadcrumb>
        <Breadcrumb.Item>
          <a href="./list">文档</a>
        </Breadcrumb.Item>
        <Breadcrumb.Item>博客</Breadcrumb.Item>
      </Breadcrumb>
      <div className={styles.InfoContentTitle}>
        上万次模型训练，TuGraph准确预测西班牙欧洲杯决赛夺冠
      </div>
      <FooterInfo />
      <div className={styles.InfoContentText}>
        <ReactMarkdown
          rehypePlugins={[rehypeSlug]}
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
          {markdown}
        </ReactMarkdown>
      </div>
    </div>
  );
};

export default InfoContent;
