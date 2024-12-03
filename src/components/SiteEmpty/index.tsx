import { Empty } from 'antd';
import emety from '@/assets/icon/emty.svg';

const SiteEmpty = ({ text }: { text: string }) => {
  return (
    <div style={{ padding: '97px 0' }}>
      <Empty image={emety} description={text} />
    </div>
  );
};

export default SiteEmpty;
