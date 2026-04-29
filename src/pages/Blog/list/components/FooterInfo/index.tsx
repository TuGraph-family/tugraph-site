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
        <div>{creatorName}</div>
      </div>
      {tag?.length ? <div>{tag?.join('、')}</div> : null}

      <div>{moment(time).format('YYYY-MM-DD HH:mm:ss')}</div>
    </div>
  );
};

export default FooterInfo;
