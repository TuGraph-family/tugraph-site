declare namespace API {
  type BlogStateEnum = 'DRAFT' | 'PUBLISHED' | 'UNKNOWN';

  interface BlogListRequest {
    /** 当前页码 */
    current?: number;
    /** 每页大小 */
    size?: number;
    /** 排序字段 key: 排序字段，value: true-升序，false-降序 */
    sortMap?: Record<string, any>;
    /** 搜索关键字 */
    keywords?: string;
    /** 博客状态 */
    state?: BlogStateEnum;
    /** 博客分类 */
    category?: string;
  }

  interface BlogListVO {
    /** 博客id */
    id?: number;
    /** 博客标题 */
    title?: string;
    /** 博客分类 */
    category?: string;
    /** 发布时间 */
    publishTime?: string;
    /** 更新时间 */
    updateTime?: string;
    /** 创建人id */
    creatorId?: string;
    /** 创建人名称 */
    creatorName?: string;
    /** 博客状态 */
    blogStateEnum?: BlogStateEnum;
    /** 博客摘要 */
    digest?: string;
    /** 宣传图片列表 */
    images?: Array<ImageVO>;
    /** 博客标签 */
    tags?: Array<string>;
  }

  interface PageVO_BlogListVO_ {
    /** 当前页 */
    current?: number;
    /** 每页显示条数，默认 10 */
    size?: number;
    /** 总数 */
    total?: number;
    /** 查询数据列表 */
    records?: Array<BlogListVO>;
  }

  type PlatformErrorCode =
    | 'SUCCESS'
    | 'ERROR'
    | 'UNKNOW_ERROR'
    | 'NOT_SUPPORT'
    | 'REQUEST_PARAMETER_ERROR'
    | 'BLOG_NOT_EXISTS';

  interface Result_PageVO_BlogListVO__ {
    /** 所在机器 IP */
    ip?: string;
    data?: PageVO_BlogListVO_;
    /** 标示是否成功 */
    success?: boolean;
    /** 响应消息 */
    message?: string;
    /** 平台统一错误码 */
    responseCode?: PlatformErrorCode;
    /** 错误码英文解释 */
    ecEnglishMsg?: string;
    /** 错误码中文解释 */
    ecChineseMsg?: string;
  }

  interface ImageVO {
    /** 图片名称 */
    name?: string;
    /** 图片url */
    url?: string;
  }

  interface BlogDetailVO {
    /** 博客id */
    id?: number;
    /** 博客标题 */
    title?: string;
    /** 博客分类 */
    category?: string;
    /** 博客内容 */
    content?: string;
    /** 博客摘要 */
    digest?: string;
    /** 发布时间 */
    publishTime?: string;
    /** 更新时间 */
    updateTime?: string;
    /** 创建人id */
    creatorId?: string;
    /** 创建人名称 */
    creatorName?: string;
    /** 宣传图片列表 */
    images?: Array<ImageVO>;
    /** 博客标签 */
    tags?: Array<string>;
    /** 博客状态 */
    blogStateEnum?: BlogStateEnum;
    /** 上一篇博客id */
    lastCommentId?: number;
    /** 上一篇博客标题 */
    lastCommentTitle?: string;
    /** 下一篇博客id */
    nextCommentId?: number;
    /** 下一篇博客标题 */
    nextCommentTitle?: string;
  }

  interface Result_BlogDetailVO_ {
    /** 所在机器 IP */
    ip?: string;
    data?: BlogDetailVO;
    /** 标示是否成功 */
    success?: boolean;
    /** 响应消息 */
    message?: string;
    /** 平台统一错误码 */
    responseCode?: PlatformErrorCode;
    /** 错误码英文解释 */
    ecEnglishMsg?: string;
    /** 错误码中文解释 */
    ecChineseMsg?: string;
  }

  interface Result_List_String__ {
    /** 所在机器 IP */
    ip?: string;
    data?: Array<string>;
    /** 标示是否成功 */
    success?: boolean;
    /** 响应消息 */
    message?: string;
    /** 平台统一错误码 */
    responseCode?: PlatformErrorCode;
    /** 错误码英文解释 */
    ecEnglishMsg?: string;
    /** 错误码中文解释 */
    ecChineseMsg?: string;
  }
}
