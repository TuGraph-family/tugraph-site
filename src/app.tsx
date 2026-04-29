import { ConfigProvider } from 'antd';
import zhCN from 'antd/es/locale/zh_CN';

export function rootContainer(container: React.ReactNode) {
  return (
    <ConfigProvider
      locale={zhCN}
      theme={{
        token: {
          // 暗黑主题核心配置
          colorBgBase: '#141415',
          colorTextBase: 'rgba(255, 255, 255, 0.85)',
          colorPrimary: '#1650ff',
        },
      }}
    >
      {container}
    </ConfigProvider>
  );
}
