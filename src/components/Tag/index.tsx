import React from 'react';
import styles from './index.less';

interface ITagProps {
  text: string;
}

const Tag: React.FC<ITagProps> = ({ text }) => {
  return (
    <span className={styles.tag}>
      <span className={styles.tagDot}></span>
      {text}
    </span>
  );
};

export default Tag;
