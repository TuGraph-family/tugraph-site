import React from 'react';
import { dynamic } from 'umi';
import { Spin } from 'antd';
const renderLoading = () => <Spin />;
export default dynamic({
  loader: async () => {
    // 动态加载第三方组件
    const { default: JoLPlayer } = await import('jol-player');
    return JoLPlayer;
  },
  loading: () => renderLoading(),
});
