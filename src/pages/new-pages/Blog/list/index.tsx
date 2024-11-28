import { NewLayout } from '@/components/NewLayout';
import { useBlog } from '@/hooks/useBlog';
import Banner from '@/pages/new-pages/Blog/list/components/Banner';
import BlogItem from '@/pages/new-pages/Blog/list/components/BlogItem';
import { Pagination } from 'antd';
import { useEffect } from 'react';
import { useImmer } from 'use-immer';

const BlogList = () => {
  const [state, setState] = useImmer<any>({
    type: '全部',
    tag: 'new',
    current: 1,
    pageSize: 10,
  });
  const { getList, getCategory, total, list, categorylist } = useBlog();
  const { type, tag, current, pageSize } = state;

  const onChangeType = (val: string) => {
    setState((draft) => {
      draft.type = val;
    });
  };
  const onChangeTag = (val: string) => {
    setState((draft) => {
      draft.tag = val;
    });
  };

  const onChangePage = (page: number, pageSize: number) => {
    setState((draft) => {
      draft.current = page;
      draft.pageSize = pageSize;
    });
  };

  useEffect(() => {
    getCategory();
  }, []);

  useEffect(() => {
    getList({
      current,
      size: pageSize,
      state: 'PUBLISHED',
      category: type === '全部' ? undefined : type,
    });
  }, [current, pageSize, type]);

  return (
    <NewLayout
      content={
        <>
          <Banner
            type={type}
            onChangeType={onChangeType}
            tag={tag}
            onChangeTag={onChangeTag}
            categorylist={categorylist}
          />
          {list?.map((item) => (
            <BlogItem detail={item} key={item?.id} />
          ))}

          <div
            style={{
              display: 'flex',
              justifyContent: 'flex-end',
              marginBottom: 40,
            }}
          >
            {total > 10 ? (
              <Pagination
                current={current}
                pageSize={pageSize}
                total={total}
                showSizeChanger={false}
                onChange={onChangePage}
              />
            ) : null}
          </div>
        </>
      }
    />
  );
};

export default BlogList;
