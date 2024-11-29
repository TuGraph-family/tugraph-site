import { SubTitle } from '@/components/SubTitle';
import {
  DownloadOutlined,
  FileImageOutlined,
  FileSearchOutlined,
  FileWordFilled,
  PlayCircleFilled,
} from '@ant-design/icons';
import styles from './index.less';

const DataReview = ({ list }: { list?: API.ActivityResourceVO[] }) => {
  const renderIcon = (type?: string) => {
    switch (type) {
      case 'FILE':
        return <FileWordFilled className={styles.icon} />;
      case 'VIDEO':
        return <PlayCircleFilled className={styles.icon} />;
      case 'PHOTO':
        return <FileImageOutlined className={styles.icon} />;
      default:
        return null;
    }
  };

  const renderBtn = (type?: string, url?: string) => {
    switch (type) {
      case 'FILE':
        return (
          <a className={styles.dataLink} href={url} target="_blank">
            <FileSearchOutlined />
            下载文件
          </a>
        );
      case 'VIDEO':
        return (
          <a className={styles.dataLink} href={url} target="_blank">
            <FileSearchOutlined />
            查看视频
          </a>
        );
      case 'PHOTO':
        return (
          <a className={styles.dataLink} href={url} target="_blank">
            <FileSearchOutlined />
            查看图片
          </a>
        );
      default:
        return null;
    }
  };

  const renderDataList = () => {
    return (
      <div className={styles.dataList}>
        {list?.map((item: API.ActivityResourceVO) => {
          return (
            <div className={styles.dataItem} key={item?.id}>
              {renderIcon(item?.type)}
              <div>
                <div className={styles.dataTitle}>{item?.name}</div>
                {renderBtn(item?.type, item?.url)}
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
