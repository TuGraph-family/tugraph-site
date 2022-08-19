export interface categoryItem {
  fileName: string;
  fileType: number;
  id: string;
  parentPath: string;
  path: string;
  sort: number;
  children: categoryItem[] | [];
}

export interface Anchor {
  id: string;
  tagName: string;
  title: string;
}

export interface docContent {
  body_html: string;
  editUrl: string;
  id: string;
  seoDesc: string;
  slug: string;
  title: string;
  updated_at: string;
  anchors: Anchor[];
}
