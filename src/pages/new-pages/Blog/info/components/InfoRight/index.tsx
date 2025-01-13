import { Anchor } from 'antd';
import { useEffect, useMemo } from 'react';
import { remark } from 'remark';
import parse from 'remark-parse';
import styles from './index.less';
import { historyPushLinkAt, slugify } from '@/util';
import { history } from 'umi';
import { useActivity } from '@/hooks/useActivity';
import moment from 'moment';

const { Link } = Anchor;

const InfoRight = ({
  detail,
  list,
  isOldBlog,
}: {
  detail?: API.BlogDetailVO;
  list?: API.BlogListVO[];
  isOldBlog?: boolean;
}) => {
  const { getLastActicity, lastDetial } = useActivity();

  const extractHeadingsTree = (html: string) => {
    const parser = new DOMParser();
    const doc = parser.parseFromString(html, 'text/html');
    const headings = Array.from(doc.querySelectorAll('h1, h2, h3'));

    const buildTree = (headings: HTMLElement[], level: number = 1) => {
      const tree = [];
      let i = 0;

      while (i < headings.length) {
        const heading = headings[i];
        const currentLevel = parseInt(heading.tagName[1], 10);

        if (currentLevel >= level) {
          const node = {
            tag: heading.tagName.toLowerCase(),
            id: heading.getAttribute('id'),
            text: heading.textContent?.trim() || '',
            children: [],
          };

          // 递归构建子节点
          const subHeadings = [];
          for (let j = i + 1; j < headings.length; j++) {
            const nextHeadingLevel = parseInt(headings[j].tagName[1], 10);
            if (nextHeadingLevel > currentLevel) {
              subHeadings.push(headings[j]);
            } else {
              break;
            }
          }

          node.children = buildTree(subHeadings, currentLevel + 1);
          tree.push(node);
          i += subHeadings.length + 1;
        } else {
          i++;
        }
      }

      return tree;
    };

    return buildTree(headings);
  };

  const headings = useMemo(() => {
    if (!detail?.content) {
      return [];
    }
    if (isOldBlog) {
      const headings: any = [];
      const tree = remark().use(parse).parse(detail?.content);

      tree?.children
        ?.filter((node) => node.type === 'heading')
        .forEach((node) => {
          const level = node.depth; //2
          const text = node.children.map((child) => child?.value).join('');

          if (level > 3) {
            return;
          }

          if (!headings?.length) {
            headings.push({ level, text });
          } else {
            if (headings[headings.length - 1]?.level < level) {
              headings.splice(headings.length - 1, 1, {
                ...headings[headings.length - 1],
                children: [
                  ...(headings[headings.length - 1]?.children || []),
                  { level, text },
                ],
              });
            } else {
              headings.push({ level, text });
            }
          }
        });
      return headings;
    } else {
      return extractHeadingsTree(detail?.content || '');
    }
  }, [detail, isOldBlog]);

  useEffect(() => {
    getLastActicity('REGISTRATION_DURING');
  }, []);

  const renderLink = (item: any) => {
    if (item?.text || item?.id) {
      return (
        <Link
          href={`#${isOldBlog ? slugify(item?.text) : item?.id}`}
          title={slugify(item?.text, true)}
        >
          {item?.children?.length
            ? item?.children?.map((childItem: any) => renderLink(childItem))
            : null}
        </Link>
      );
    } else if (item?.children?.length) {
      return item?.children?.map((childItem: any) => renderLink(childItem));
    }

    return null;
  };

  return (
    <div className={styles.InfoRight}>
      {headings.length ? (
        <Anchor
          className={styles.blogAnchor}
          affix={false}
          getContainer={() =>
            document?.getElementById('blog-content') || window
          }
          offsetTop={100}
          targetOffset={100}
        >
          {headings?.map((item: any) => {
            return renderLink(item);
          })}
        </Anchor>
      ) : null}

      {list?.length ? (
        <div className={styles.newest}>
          <div className={styles.newestTitle}>最新博客</div>
          {list?.map((item) => (
            <div
              key={item?.id}
              className={styles.newestItem}
              onClick={() =>
                history.push(historyPushLinkAt(`/blog/info/${item.id}`))
              }
            >
              {item.title}
            </div>
          ))}
        </div>
      ) : null}
      <div
        className={styles.bannerImg}
        style={{
          backgroundImage: `url(${lastDetial?.backgroundImage?.url})`,
        }}
        onClick={() =>
          history.push(historyPushLinkAt('/activity/info/' + lastDetial?.id))
        }
      ></div>
    </div>
  );
};

export default InfoRight;
