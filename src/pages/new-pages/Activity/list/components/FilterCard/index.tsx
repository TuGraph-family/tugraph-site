import { useState } from 'react';
import styles from './index.less';
import { Switch } from 'antd';
import SwitchTab from '@/components/SwitchTab';

const FilterCard = () => {
  const [form, setForm] = useState('all');
  const [status, setStatus] = useState('all');
  const [material, setMaterial] = useState('all');
  const formList = [
    {
      label: '不限',
      value: 'all',
    },
    {
      label: '线上活动',
      value: 'online',
    },
    {
      label: '线下活动',
      value: 'offline',
    },
  ];

  const stateList = [
    {
      label: '不限',
      value: 'all',
    },
    {
      label: '报名中',
      value: 'enrolling',
    },
    {
      label: '进行中',
      value: 'ongoing',
    },
    {
      label: '已结束',
      value: 'ended',
    },
  ];

  const materialList = [
    {
      label: '不限',
      value: 'all',
    },
    {
      label: '有',
      value: 'yes',
    },
    {
      label: '无',
      value: 'no',
    },
  ];

  return (
    <div className={styles.FilterCard}>
      <div>
        <div className={styles.FilterLabel}>活动形式：</div>
        <SwitchTab options={formList} current={form} onChange={setForm} />
      </div>
      <div>
        <div className={styles.FilterLabel}>活动状态：</div>
        <SwitchTab options={stateList} current={status} onChange={setStatus} />
      </div>
      <div>
        <div className={styles.filterLabel}>活动资料：</div>
        <SwitchTab
          options={materialList}
          current={material}
          onChange={setMaterial}
        />
      </div>
    </div>
  );
};

export default FilterCard;
