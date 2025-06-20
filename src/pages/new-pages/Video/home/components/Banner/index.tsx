import styles from './index.less';
import { Input } from 'antd';

const Banner: React.FC<{
  onSearch: (value: string) => void;
}> = ({ onSearch }) => {
  let background =
    'url(https://mdn.alipayobjects.com/huamei_p63okt/afts/img/0dUUR6X_gtwAAAAAAAAAAAAADh8WAQFr/original)';

  return (
    <div
      className={styles.bannerBox}
      style={{
        backgroundImage: background,
        height: '300px',
      }}
    >
      <div className={styles.banner}>
        <div className={styles.databaseTitleSection}>
          <div className={styles.titleText}>视频中心</div>
          <div className={styles.descriptionText}>
            探索图数据库的无限可能，一站式学习与实践TuGraph
          </div>
          <Input.Search
            placeholder="请输入关键词"
            className={styles.searchInput}
            onSearch={onSearch}
          />
        </div>
        <img
          src="https://mdn.alipayobjects.com/huamei_p63okt/afts/img/m7MpSbJlTGMAAAAAAAAAAAAAeh8WAQFr/original"
          alt=""
          className={styles.icon}
        />
      </div>
    </div>
  );
};

export default Banner;
