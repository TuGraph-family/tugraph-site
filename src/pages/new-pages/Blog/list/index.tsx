import { NewLayout } from '@/components/NewLayout';
import SiteEmpty from '@/components/SiteEmpty';
import { useBlog } from '@/hooks/useBlog';
import Banner from '@/pages/new-pages/Blog/list/components/Banner';
import BlogItem from '@/pages/new-pages/Blog/list/components/BlogItem';
import { tracertBPos } from '@/util';
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
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  useEffect(() => {
    getCategory();
    tracertBPos('b106234');
  }, []);

  useEffect(() => {
    getList({
      current,
      size: pageSize,
      state: 'PUBLISHED',
      category: type === '全部' ? undefined : type,
      sortMap:
        tag === 'new'
          ? {
              publish_time: false,
            }
          : undefined,
    });
  }, [current, pageSize, type, tag]);

  return (
    <NewLayout
      headerBgStyles={{
        backgroundImage:
          'linear-gradient(rgb(225, 236, 255) 0%, rgb(227, 236, 255) 32%, #FFF 100%)',
      }}
      content={
        <>
          <Banner
            type={type}
            onChangeType={onChangeType}
            tag={tag}
            onChangeTag={onChangeTag}
            categorylist={categorylist}
          />
          {list?.length ? (
            <>
              {list?.map((item, idx) => (
                <BlogItem
                  detail={item}
                  key={item?.id}
                  isVisibleBoreder={list?.length - 1 === idx}
                />
              ))}
            </>
          ) : (
            <SiteEmpty text="暂无博客" />
          )}

          <div
            style={{
              display: 'flex',
              justifyContent: 'flex-end',
              paddingBottom: 40,
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
