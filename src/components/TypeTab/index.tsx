import React from 'react';
import cx from 'classnames';
import styles from './index.less';

interface ITypeTabProps {
  typeList: {
    value: string;
    label: string;
  }[];
  current?: string;
  onChangeType?: (type: string) => void;
}

const TypeTab: React.FC<ITypeTabProps> = ({
  typeList,
  current,
  onChangeType,
}) => {
  return (
    <div className={styles.typelist}>
      {typeList.map((item) => (
        <div
          className={cx(
            styles.typeItem,
            item.value === current ? styles.typeActived : '',
          )}
          key={item.value}
          onClick={() => onChangeType?.(item.value)}
        >
          {item.label}
        </div>
      ))}
    </div>
  );
};

export default TypeTab;
