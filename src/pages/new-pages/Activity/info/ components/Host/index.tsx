import { SubTitle } from '@/components/SubTitle';
import styles from './index.less';
import { Typography } from 'antd';

const { Text } = Typography;
const Host = ({ list }: { list?: API.ActivityGuestVO[] }) => {
  const renderHost = () => {
    return (
      <div className={styles.hostList}>
        {list?.map((item) => {
          return (
            <div key={item?.id} className={styles.hostCard}>
              <img src={item?.photo} alt="" className={styles.avatar} />
              <div className={styles.info}>
                <div className={styles.name}>{item?.name}</div>
                <Text
                  style={
                    item?.introduction?.length > 14 ? { width: 192 } : undefined
                  }
                  ellipsis={
                    item?.introduction?.length > 14
                      ? { tooltip: item?.introduction }
                      : false
                  }
                >
                  {item?.introduction}
                </Text>
                <div className={styles.position}>{}</div>
              </div>
            </div>
          );
        })}
      </div>
    );
  };
  return (
    <div style={{ marginBottom: 72 }}>
      <SubTitle title="主持人" />
      {renderHost()}
    </div>
  );
};

export default Host;
