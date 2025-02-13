import { SubTitle } from '@/components/SubTitle';
import styles from './index.less';
import { ArrowRightOutlined } from '@ant-design/icons';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { historyPushLinkAt } from '@/util';
import { history } from 'umi';
import { IntlShape } from 'react-intl';
import { getCaseList } from '@/pages/new-pages/Product/constants/data';

const UserDemo = ({ intl }: { intl: IntlShape }) => {
  const [ref, inView] = useInView({
    triggerOnce: true, // 确保动画只触发一次
    threshold: 0.3, // 在元素至少有 x% 可见时触发动画
  });

  return (
    <div className={styles.userDemo}>
      <div>
        <SubTitle
          title={intl.formatMessage({ id: 'product.case.title' })}
          style={{ margin: '52px 0 52px' }}
        />
        <div className={styles.demoList} ref={ref}>
          {getCaseList(intl).map((item, key) => {
            const isEven = key % 2 === 1;

            return (
              <motion.div
                initial={
                  isEven ? { opacity: 0, y: 110 } : { opacity: 0, y: -50 }
                } // 初始化透明度为0和向下偏移50px
                animate={
                  isEven
                    ? { opacity: inView ? 1 : 0, y: inView ? 59 : 110 }
                    : { opacity: inView ? 1 : 0, y: inView ? 0 : -50 }
                }
                transition={{ duration: 1 }}
                key={item.key}
              >
                <div className={styles.demoItem}>
                  <img src={item.logo} alt="" className={styles.logo} />
                  <div className={styles.desc}>{item.desc}</div>
                  <ArrowRightOutlined className={styles.arrowIcon} />
                </div>
              </motion.div>
            );
          })}
        </div>
        <div
          className={styles.more}
          onClick={() => {
            history.push(historyPushLinkAt('/case'));
          }}
        >
          <span>{intl.formatMessage({ id: 'product.btn.desc3' })}</span>
          <ArrowRightOutlined className={styles.arrowIcon} />
        </div>
      </div>
    </div>
  );
};

export default UserDemo;
