import moment from 'moment';
import styles from './index.less';
import { ClockCircleOutlined, TagOutlined } from '@ant-design/icons';

interface IProps {
  creatorName?: string;
  tag?: string[];
  time?: string;
}
const FooterInfo = ({ creatorName, tag, time }: IProps) => {
  return (
    <div className={styles.blogItemFooter}>
      <div>
        <div className={styles.avatar}></div>
        <div>{creatorName}</div>
      </div>
      {tag?.length ? (
        <div>
          <TagOutlined className={styles.icon} />
          <div>{tag?.join('、')}</div>
        </div>
      ) : null}

      <div>
        <ClockCircleOutlined className={styles.icon} />
        <div>{moment(time).format('YYYY-MM-DD HH:mm:ss')}</div>
      </div>
    </div>
  );
};

export default FooterInfo;
