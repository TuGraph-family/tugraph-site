import styles from './index.less';
import SwitchTab from '@/components/SwitchTab';
import TypeTab from '@/components/TypeTab';
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
        <div className={styles.filterLabel}>活动形式：</div>
        <TypeTab
          typeList={activityWayEnumOptions}
          current={activityWayEnum}
          onChangeType={(val) => updateFilter('activityWayEnum', val)}
        />
      </div>
      <div>
        <div className={styles.filterLabel}>活动状态：</div>
        <TypeTab
          typeList={activityStateEnumOptions}
          current={activityStateEnum}
          onChangeType={(val) => updateFilter('activityStateEnum', val)}
        />
      </div>
      <div>
        <div className={styles.filterLabel}>活动资料：</div>
        <TypeTab
          typeList={resourceOPtions}
          current={activityResourceFlag}
          onChangeType={(val) => updateFilter('activityResourceFlag', val)}
        />
      </div>
    </div>
  );
};

export default FilterCard;
