import { SubTitle } from '@/components/SubTitle';
import {
  DownloadOutlined,
  FileSearchOutlined,
  FileWordFilled,
  PlayCircleFilled,
} from '@ant-design/icons';
import styles from './index.less';

const DataReview = () => {
  const dataLst = [
    {
      type: 'file',
      title: '货拉拉大数据存储实战揭秘：解锁物流行业数据潜能',
      url: 'https://gw.alipayobjects.com/os/bmw-prod/2145f227-08f0-435a-abe6-7f503b65da7d.mov',
    },
    {
      type: 'video',
      title: '货拉拉大数据存储实战揭秘：解锁物流行业数据潜能',
      url: 'https://gw.alipayobjects.com/os/bmw-prod/2145f227-08f0-435a-abe6-7f503b65da7d.mov',
    },
    {
      type: 'file',
      title: '货拉拉大数据存储实战揭秘：解锁物流行业数据潜能',
      url: 'https://gw.alipayobjects.com/os/bmw-prod/2145f227-08f0-435a-abe6-7f503b65da7d.mov',
    },
  ];

  const renderDataList = () => {
    return (
      <div className={styles.dataList}>
        {dataLst.map((item) => {
          return (
            <div className={styles.dataItem}>
              {item.type === 'file' ? (
                <FileWordFilled className={styles.icon} />
              ) : (
                <PlayCircleFilled className={styles.icon} />
              )}
              <div>
                <div className={styles.dataTitle}>{item.title}</div>
                <a className={styles.dataLink} href={item.url} target="">
                  {item.type === 'file' ? (
                    <DownloadOutlined />
                  ) : (
                    <FileSearchOutlined />
                  )}
                  {item.type === 'file' ? '下载文件' : '查看资料'}
                </a>
              </div>
            </div>
          );
        })}
      </div>
    );
  };

  return (
    <div>
      <SubTitle title="资料回顾" />
      {renderDataList()}
    </div>
  );
};

export default DataReview;
