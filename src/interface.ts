import React from 'react';

interface CategoryItem {
  fileName: string;
  fileType: number;
  id: string;
  parentPath: string;
  path: string;
  sort: number;
  children: CategoryItem[] | [];
}

interface Anchor {
  id: string;
  tagName: string;
  title: string;
}

interface DocContent {
  id: string;
  body_html?: string;
  fileName?: string;
  anchors: Anchor[];
  docContent?: string;
  editUrl?: string;
  seoDesc?: string;
  docGmtModified?: string;
  title?: string;
  updated_at?: string;
}
interface BlogItem {
  id: number;
  img: string;
  title: string;
  desc: string;
  updateDate: string;
  content: string;
  type: string;
  isLink?: boolean;
}

interface MenuItem {
  label: React.ReactNode;
  key: string;
  children?: MenuItem[];
  icon?: React.ReactNode;
}

interface IOption {
  value?: string;
  label?: string;
}

interface DownloadItem {
  title?: string;
  subTitle?: string;
  name?: string;
  version?: {
    list: any[];
    value?: string;
  };
  action?: {
    icon?: 'download' | 'copy';
    text: string;
    onAction: (value: any) => void;
  };
  items?: any;
}

interface IFormValues {
  type?: string;
  name?: string;
  phone?: string;
  email?: string;
  company?: string;
  position?: string;
  city?: string;
  content?: string;
}

interface IUseVideoState {
  vidoeTypes: IOption[];
  collectionTypes: IOption[];
  products: IOption[];
  collectionList?: API.CollectionListVO[];
  list?: Record<string, any>[];
  total: number;
}

export {
  CategoryItem,
  Anchor,
  DocContent,
  BlogItem,
  MenuItem,
  IOption,
  DownloadItem,
  IFormValues,
  IUseVideoState,
};
