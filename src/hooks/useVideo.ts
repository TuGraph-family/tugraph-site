import { IUseVideoState } from '@/interface';
import * as CollectionController from '@/services/CollectionController';
import * as DictoryController from '@/services/DictoryController';
import * as VideoController from '@/services/VideoController';
import { useRequest } from 'umi';
import { useImmer } from 'use-immer';

export const useVideo = () => {
  const [videoState, updateVideoState] = useImmer<IUseVideoState>({
    vidoeTypes: [],
    collectionTypes: [],
    products: [],
    collectionList: [],
    list: [],
    total: 0,
  });

  // 合集列表
  const { run: runListCollection, loading: loadingListCollection } = useRequest(
    CollectionController.list,
    {
      manual: true,
    },
  );

  const getListCollection = async (
    params: API.CollectionListRequest,
    isReturn = false,
  ) => {
    try {
      const res = await runListCollection(params);
      const { total, records } = res?.data || {};
      if (isReturn) {
        return records;
      }
      updateVideoState((draft) => {
        draft.list = records || [];
        draft.total = total || 0;
      });
    } catch (error) {
      console.error(error);
    }
  };

  const getOptions = (list: API.DictoryVO[]) => {
    return list.map((item) => {
      return {
        label: item.name,
        value: item.name,
      };
    });
  };

  // 类型列表
  const { run: runTypeList, loading: loadingType } = useRequest(
    DictoryController.list,
    {
      manual: true,
    },
  );

  const getTypeList = async () => {
    try {
      const { data: videoList } = await runTypeList({ type: 'VIDEO' });
      const { data: collectionList } = await runTypeList({
        type: 'COLLECTION',
      });
      const { data: productList } = await runTypeList({ type: 'PRODUCT' });

      updateVideoState((draft) => {
        draft.vidoeTypes = getOptions(videoList || []);
        draft.collectionTypes = getOptions(collectionList || []);
        draft.products = getOptions(productList || []);
      });
    } catch (error) {
      console.error(error);
    }
  };

  // 视频列表
  const { run: runList, loading: loadingList } = useRequest(
    VideoController.list,
    {
      manual: true,
    },
  );

  const getList = async (params: API.VideoListRequest, isReturn = false) => {
    try {
      const res = await runList({
        ...params,
        status: 'ONLINE',
        sortMap: { update_time: false },
      });
      const { total, records } = res?.data || {};
      if (isReturn) {
        return records;
      }
      updateVideoState((draft) => {
        draft.list = records || [];
        draft.total = total || 0;
      });
    } catch (error) {
      console.error(error);
    }
  };

  return {
    ...videoState,
    getListCollection,
    loadingListCollection,
    getTypeList,
    getList,
    loadingList,
    loadingType,
  };
};
