import { SubTitle } from '@/components/SubTitle';
import ReactMarkdown from 'react-markdown';
import rehypeRaw from 'rehype-raw';
import remarkGfm from 'remark-gfm';
const Introduction = ({ markdown }: { markdown?: string }) => {
  return (
    <div style={{ width: 1200, margin: ' 0 auto 72px' }}>
      <SubTitle title="活动简介" />

      <ReactMarkdown remarkPlugins={[remarkGfm]} rehypePlugins={[rehypeRaw]}>
        {markdown || ''}
      </ReactMarkdown>
    </div>
  );
};

export default Introduction;
