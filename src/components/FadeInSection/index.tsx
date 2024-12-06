/**
 * file: 渐隐显示动画效果
 * author: Allen
 */

import React from 'react';
import { MotionProps, motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

interface IFadeInSectionProps extends MotionProps {
  children: React.ReactNode;
  threshold?: number;
}

const FadeInSection: React.FC<IFadeInSectionProps> = (props) => {
  const { children, threshold = 0.8, ...otherProps } = props;
  const [ref, inView] = useInView({
    triggerOnce: true, // 确保动画只触发一次
    threshold, // 在元素至少有 x% 可见时触发动画
  });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }} // 初始化透明度为0和向下偏移50px
      animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 50 }} // 可见时透明度变为1和偏移量变为0
      transition={{ duration: 1 }} // 动画持续时间为0.5秒
      {...otherProps}
    >
      {children}
    </motion.div>
  );
};

export default FadeInSection;
