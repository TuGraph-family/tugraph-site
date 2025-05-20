import cx from 'classnames';
import styles from './index.less';
import SwitchTab from '@/components/SwitchTab';
import { Input } from 'antd';
import { SearchOutlined } from '@ant-design/icons';

const Banner = () => {
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
          <div className={styles.titleText}>视频中心 </div>
          <div className={styles.descriptionText}>
            视频中心文案说明，视频中心文案说明，约24～30个字左右
          </div>
          <Input
            placeholder="请输入关键词"
            className={styles.searchInput}
            suffix={<SearchOutlined />}
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
