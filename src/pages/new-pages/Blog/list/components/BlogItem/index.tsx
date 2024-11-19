import { historyPushLinkAt } from '@/util';
import styles from './index.less';
import { history } from 'umi';
import FooterInfo from '@/pages/new-pages/Blog/list/components/FooterInfo';

const BlogItem = () => {
  return (
    <div
      className={styles.blogItem}
      onClick={() => history.push(historyPushLinkAt('/blog/info'))}
    >
      <img src="" alt="" className={styles.blogItemImg} />
      <div className={styles.blogItemContent}>
        <div className={styles.blogItemTitle}>
          上万次模型训练，TuGraph准确预测西班牙欧洲杯决赛夺冠
        </div>
        <div className={styles.blogItemDesc}>
          7月15日凌晨，2024年欧洲杯完美落幕。在柏林奥林匹克体育场，西班牙队以
          2:1 战胜英格兰队，以7场连胜的成绩成为本届欧洲杯冠军。TuGraph
          团队开发的“智猜足球”小工具（https://football.tugraph.tech）也准确预测了这场胜利✌️
        </div>
        <FooterInfo />
      </div>
    </div>
  );
};

export default BlogItem;
