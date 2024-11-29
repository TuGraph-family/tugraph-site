import { SubTitle } from '@/components/SubTitle';
import ReactMarkdown from 'react-markdown';
const Introduction = ({ markdown }: { markdown?: string }) => {
  return (
    <div style={{ width: 1200, margin: 'auto' }}>
      <SubTitle title="活动简介" />

      <ReactMarkdown>{markdown || ''}</ReactMarkdown>
    </div>
  );
};

export default Introduction;
