import { SubTitle } from '@/components/SubTitle';
import styles from './index.less';
import moment from 'moment';

const Agenda = ({ list }: { list?: API.ActivityProcessVO[] }) => {
  const renderList = () => {
    return (
      <div className={styles.agendaList}>
        <div className={styles.Col}>
          {list?.map((item, key) => {
            return (
              <div className={styles.agendaTime} key={key}>
                {item?.processStartTime
                  ? moment(item?.processStartTime).format('YYYY-MM-DD HH:mm')
                  : null}
                ~
                {item?.processEndTime
                  ? moment(item?.processEndTime).format('YYYY-MM-DD HH:mm')
                  : null}
              </div>
            );
          })}
        </div>
        <div className={styles.Col}>
          {list?.map((item) => {
            return (
              <div key={item?.id} className={styles.agendaStep}>
                {' '}
                {item?.processSubject}
              </div>
            );
          })}
        </div>
        <div className={styles.Col}>
          {list?.map((item) => {
            return (
              <div key={item?.id}>
                {item?.guest?.map((member) => {
                  return (
                    <div key={member?.id} className={styles.memberItemName}>
                      {member?.name}
                    </div>
                  );
                })}
              </div>
            );
          })}
        </div>
        <div className={styles.Col}>
          {list?.map((item, key) => {
            return (
              <div key={key}>
                {item?.guest?.map((member) => {
                  return (
                    <div key={member.id} className={styles.memberItemDesc}>
                      {member?.position}
                    </div>
                  );
                })}
              </div>
            );
          })}
        </div>
      </div>
    );
  };

  return (
    <div className={styles.agenda}>
      <SubTitle title="活动议程" />
      {renderList()}
    </div>
  );
};

export default Agenda;
