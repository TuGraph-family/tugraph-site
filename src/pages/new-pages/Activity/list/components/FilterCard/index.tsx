import styles from './index.less';
import SwitchTab from '@/components/SwitchTab';
import {
  activityStateEnumOptions,
  activityWayEnumOptions,
  resourceOPtions,
} from '@/constant';

interface IProps {
  activityWayEnum: string;
  activityStateEnum: string;
  activityResourceFlag: string;
  updateFilter: (key: string, val: string | boolean) => void;
}
const FilterCard = ({
  activityWayEnum,
  activityStateEnum,
  activityResourceFlag,
  updateFilter,
}: IProps) => {
  return (
    <div className={styles.FilterCard}>
      <div>
        <div className={styles.FilterLabel}>活动形式：</div>
        <SwitchTab
          options={activityWayEnumOptions}
          current={activityWayEnum}
          onChange={(val) => updateFilter('activityWayEnum', val)}
        />
      </div>
      <div>
        <div className={styles.FilterLabel}>活动状态：</div>
        <SwitchTab
          options={activityStateEnumOptions}
          current={activityStateEnum}
          onChange={(val) => updateFilter('activityStateEnum', val)}
        />
      </div>
      <div>
        <div className={styles.filterLabel}>活动资料：</div>
        <SwitchTab
          options={resourceOPtions}
          current={activityResourceFlag}
          onChange={(val) => updateFilter('activityResourceFlag', val)}
        />
      </div>
    </div>
  );
};

export default FilterCard;
