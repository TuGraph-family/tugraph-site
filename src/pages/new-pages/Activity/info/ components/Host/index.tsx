import { SubTitle } from '@/components/SubTitle';
import styles from './index.less';
const Host = () => {
  const hostList = [
    {
      avatar:
        'https://mdn.alipayobjects.com/huamei_p63okt/afts/img/dR8USJrp5vMAAAAAAAAAAAAADh8WAQFr/original',
      name: '李四',
      position: '蚂蚁金服 高级工程师',
    },
    {
      avatar:
        'https://mdn.alipayobjects.com/huamei_p63okt/afts/img/dR8USJrp5vMAAAAAAAAAAAAADh8WAQFr/original',
      name: '李四',
      position: '蚂蚁金服 高级工程师',
    },
    {
      avatar:
        'https://mdn.alipayobjects.com/huamei_p63okt/afts/img/dR8USJrp5vMAAAAAAAAAAAAADh8WAQFr/original',
      name: '李四',
      position: '蚂蚁金服 高级工程师',
    },
    {
      avatar:
        'https://mdn.alipayobjects.com/huamei_p63okt/afts/img/dR8USJrp5vMAAAAAAAAAAAAADh8WAQFr/original',
      name: '李四',
      position: '蚂蚁金服 高级工程师',
    },
  ];

  const renderHost = () => {
    return (
      <div className={styles.hostList}>
        {hostList.map((item) => {
          return (
            <div className={styles.hostCard}>
              <img src={item.avatar} alt="" className={styles.avatar} />
              <div className={styles.info}>
                <div className={styles.name}>{item.name}</div>
                <div className={styles.position}>{item.position}</div>
              </div>
            </div>
          );
        })}
      </div>
    );
  };
  return (
    <div>
      <SubTitle title="主持人" />
      {renderHost()}
    </div>
  );
};

export default Host;
