import { Empty } from 'antd';
import emety from '@/assets/icon/emty.svg';

const SiteEmpty = ({ text }: { text: string }) => {
  return (
    <div style={{ padding: '97px 0' }}>
      <Empty image={emety} description={text} style={{ color: '#768191' }} />
    </div>
  );
};

export default SiteEmpty;
