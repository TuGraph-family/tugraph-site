import React from 'react';

export interface CategoryItem {
  fileName: string;
  fileType: number;
  id: string;
  parentPath: string;
  path: string;
  sort: number;
  children: CategoryItem[] | [];
}

export interface Anchor {
  id: string;
  tagName: string;
  title: string;
}

export interface DocContent {
  body_html: string;
  editUrl: string;
  id: string;
  seoDesc: string;
  slug: string;
  title: string;
  updated_at: string;
  anchors: Anchor[];
}
export interface BlogItem {
  id: number;
  img: string;
  title: string;
  desc: string;
  updateDate: string;
  content: string;
  type: string;
}

export interface MenuItem {
  label: React.ReactNode;
  key: string;
  children?: MenuItem[];
  icon?: React.ReactNode;
}
