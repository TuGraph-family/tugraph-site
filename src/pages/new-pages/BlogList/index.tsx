import { NewLayout } from '@/components/NewLayout';
import Banner from '@/pages/new-pages/BlogList/components/Banner';
import BlogItem from '@/pages/new-pages/BlogList/components/BlogItem';
import { Pagination } from 'antd';
import { useState } from 'react';

const BlogList = () => {
  const [type, setType] = useState('all');
  const [tag, setTag] = useState('new');

  const onChangeType = (val: string) => setType(val);
  const onChangeTag = (val: string) => setTag(val);

  return (
    <NewLayout
      content={
        <>
          <Banner
            type={type}
            onChangeType={onChangeType}
            tag={tag}
            onChangeTag={onChangeTag}
          />
          <BlogItem />
          <div
            style={{
              display: 'flex',
              justifyContent: 'flex-end',
              marginBottom: 40,
            }}
          >
            <Pagination defaultCurrent={1} total={50} />
          </div>
        </>
      }
    />
  );
};

export default BlogList;
