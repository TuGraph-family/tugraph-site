import { SubTitle } from '@/components/SubTitle';
import styles from './index.less';

const Agenda = () => {
  const agendaList = [
    {
      time: '14:00～14:10',
      Step: '致辞',
      memberList: [
        {
          name: '唐卫清',
          desc: '中国计算机学会 秘书长',
        },
      ],
    },
    {
      time: '14:10～14:40',
      Step: 'Streaming Gragh Processing and Analytics',
      memberList: [
        {
          name: 'M. Tamer Ozsu',
          desc: '加拿大滑铁卢大学 教授  ',
        },
        {
          name: '陈文光',
          desc: '',
        },
        {
          name: '陈华钧',
          desc: '浙江大学 计算机学院教授',
        },
      ],
    },
  ];

  const renderList = () => {
    return (
      <div className={styles.agendaList}>
        <div className={styles.Col}>
          {agendaList.map((item) => {
            return <div className={styles.agendaTime}>{item.time}</div>;
          })}
        </div>
        <div className={styles.Col}>
          {agendaList.map((item) => {
            return <div className={styles.agendaStep}> {item.Step}</div>;
          })}
        </div>
        <div className={styles.Col}>
          {agendaList.map((item) => {
            return (
              <div>
                {item.memberList.map((member) => {
                  return (
                    <div className={styles.memberItemName}>{member.name}</div>
                  );
                })}
              </div>
            );
          })}
        </div>
        <div className={styles.Col}>
          {agendaList.map((item) => {
            return (
              <div>
                {item.memberList.map((member) => {
                  return (
                    <div className={styles.memberItemDesc}>{member.desc}</div>
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
    <div>
      <SubTitle title="活动议程" />
      {renderList()}
    </div>
  );
};

export default Agenda;
