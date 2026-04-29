import styles from './index.less';
import { Input } from 'antd';

const Banner: React.FC<{
  onSearch: (value: string) => void;
}> = ({ onSearch }) => {
  const onPressEnter = (e) => {
    onSearch(e?.target?.value);
  };

  return (
    <div className={styles.banner}>
      <div className={styles.titleText}>视频中心</div>
      <div className={styles.footer}>
        <div className={styles.descriptionText}>
          探索图数据库的无限可能，一站式学习与实践TuGraph
        </div>
        <Input
          placeholder="搜索视频"
          className={styles.searchInput}
          onPressEnter={onPressEnter}
        />
      </div>
    </div>
  );
};

export default Banner;
