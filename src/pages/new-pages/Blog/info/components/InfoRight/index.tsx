import { Anchor } from 'antd';
import { useMemo } from 'react';
import { remark } from 'remark';
import parse from 'remark-parse';
import styles from './index.less';
import { slugify } from '@/util';

const { Link } = Anchor;

const InfoRight = ({ markdown }: { markdown?: string }) => {
  const headings = useMemo(() => {
    const headings: any = [];

    const tree = remark().use(parse).parse(markdown);

    console.log(
      tree?.children?.filter((node) => node.type === 'heading'),
      'lkmlkm',
    );
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
  }, [markdown]);

  const renderLink = (item: any) => {
    if (item?.text) {
      return (
        <Link href={`#${slugify(item?.text)}`} title={item?.text}>
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

  const testData = [
    {
      title: '论文解读｜GRAG: Graph Retrieval-Augmented Generation',
      href: '',
    },
    {
      title: '论文解读｜GRAG: Graph Retrieval-Augmented Generation',
      href: '',
    },
    {
      title: '论文解读｜GRAG: Graph Retrieval-Augmented Generation',
      href: '',
    },
  ];

  return (
    <div className={styles.InfoRight}>
      <Anchor className={styles.blogAnchor}>
        {headings?.map((item: any) => {
          return renderLink(item);
        })}
      </Anchor>
      <div className={styles.newest}>
        <div className={styles.newestTitle}>最新博客</div>
        {testData?.map((item) => (
          <div className={styles.newestItem}>{item.title}</div>
        ))}
      </div>
      <img src="" alt="" className={styles.bannerImg} />
    </div>
  );
};

export default InfoRight;
