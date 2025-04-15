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
    categories?: string[];
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
    categories?: string[];
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

  type ActivityStateEnum =
    | 'DRAFT'
    | 'PUBLISHED'
    | 'REGISTRATION_DURING'
    | 'PROGRESS'
    | 'OVER'
    | 'NOT_STARTED';

  type ActivityWayEnum = 'ONLINE' | 'OFFLINE';

  interface ActivityListRequest {
    /** 当前页码 */
    current?: number;
    /** 每页大小 */
    size?: number;
    /** 排序字段 key: 排序字段，value: true-升序，false-降序 */
    sortMap?: Record<string, any>;
    /** 搜索关键字 */
    keywords?: string;
    /** 活动状态 */
    activityStateEnum?: ActivityStateEnum;
    activityStatusEnum?: ActivityStateEnum;
    /** 活动形式 */
    activityWayEnum?: ActivityWayEnum;
    /** 活动资料 */
    activityResourceFlag?: boolean;
    /** 活动ids */
    activityIds?: Array<number>;
  }

  interface Result_PageVO_ActivityListVO__ {
    /** 所在机器 IP */
    ip?: string;
    data?: PageVO_ActivityListVO_;
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

  interface PageVO_ActivityListVO_ {
    /** 当前页 */
    current?: number;
    /** 每页显示条数，默认 10 */
    size?: number;
    /** 总数 */
    total?: number;
    /** 查询数据列表 */
    records?: Array<ActivityListVO>;
  }

  interface ActivityListVO {
    /** 博客id */
    id?: number;
    /** 标题 */
    title?: string;
    /** 活动形式：线下/线下 */
    activityWay?: ActivityWayEnum;
    /** 活动渠道 */
    activityChannel?: string;
    /** 开始时间 */
    startTime?: string;
    /** 发布时间 */
    publishTime?: string;
    /** 修改时间 */
    updateTime?: string;
    /** 创建人id */
    creatorId?: string;
    /** 创建人名称 */
    creatorName?: string;
    /** 活动状态 */
    activityState?: ActivityStateEnum;
    /** 活动状态(草稿/发布) */
    activityStatus?: ActivityStateEnum;
    /** 活动结束时间 */
    endTime?: string;
    /** 报名开始时间 */
    registrationStartTime?: string;
    /** 报名结束时间 */
    registrationEndTime?: string;
    /** 报名链接 */
    registrationUrl?: string;
    /** 活动简介 */
    introduction?: string;
    /** 背景图 */
    backgroundImage?: ImageVO;
    /** 封面图 */
    frontCoverImage?: ImageVO;
    province?: string;
    city?: string;
    district?: string;
    address?: string;
    activityResourceFlag?: boolean;
  }

  interface Result_ActivityDetailVO_ {
    /** 所在机器 IP */
    ip?: string;
    data?: ActivityDetailVO;
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

  interface ActivityDetailVO {
    id?: number;
    /** 活动名称 */
    title?: string;
    /** 活动副标题 */
    subtitle?: string;
    /** 活动方式:线上/线下 */
    activityWay?: ActivityWayEnum;
    /** 活动渠道 */
    activityChannel?: string;
    /** 省 */
    province?: string;
    /** 市 */
    city?: string;
    /** 区 */
    district?: string;
    /** 详细地址 */
    address?: string;
    /** 活动开始时间 */
    startTime?: string;
    /** 活动结束时间 */
    endTime?: string;
    /** 报名开始时间 */
    registrationStartTime?: string;
    /** 报名结束时间 */
    registrationEndTime?: string;
    /** 报名链接 */
    registrationUrl?: string;
    /** 活动简介 */
    introduction?: string;
    /** 是否在前台展示活动议程 */
    frontProcessShow?: boolean;
    /** 活动议程 */
    processes?: Array<ActivityProcessVO>;
    /** 是否在前台展示嘉宾 */
    frontGuestShow?: boolean;
    /** 嘉宾列表 */
    guests?: Array<ActivityGuestVO>;
    /** 是否在前台展示活动资源 */
    frontResourceShow?: boolean;
    /** 活动资源列表 */
    activityResources?: Array<ActivityResourceVO>;
    /** 发布类型: 立即发布/定时发布 */
    publishType?: ActivityPublishTypeEnum;
    /** 发布时间(定时发布时需要) */
    publishTime?: string;
    /** 背景图 */
    backgroundImage?: ImageVO;
    /** 封面图 */
    frontCoverImage?: ImageVO;
    /** 活动状态 */
    activityStatus?: ActivityStateEnum;
    /** 活动状态 */
    activityState?: ActivityStateEnum;
  }

  interface ActivityProcessVO {
    /** 议程id */
    id?: number;
    /** 议程标题 */
    processSubject?: string;
    /** 议程内容 */
    processContent?: string;
    /** 议程开始时间 */
    processStartTime?: string;
    /** 议程结束时间 */
    processEndTime?: string;
    /** 议程嘉宾 */
    guest?: Array<ActivityGuestVO>;
  }

  interface ActivityGuestVO {
    /** 嘉宾id */
    id?: number;
    /** 嘉宾姓名 */
    name?: string;
    /** 职位 */
    position?: string;
    /** 嘉宾简介 */
    introduction?: string;
    /** 嘉宾照片 */
    photo?: string;
  }

  type ActivityPublishTypeEnum = 'PUBLISH_NOW' | 'SCHEDULED_RELEASE';

  type ActivityResourceTypeEnum = 'PHOTO' | 'VIDEO' | 'FILE';

  interface ActivityResourceVO {
    /** 资料id */
    id?: number;
    /** 资料名称 */
    name?: string;
    /** 资料类型 */
    type?: ActivityResourceTypeEnum;
    /** 资料链接 */
    url?: string;
  }

  interface AskRegisterRequest {
    /** 问题类型 */
    askType?: string;
    /** 用户名 */
    user?: string;
    /** 联系方式 */
    phone?: string;
    /** 邮箱 */
    email?: string;
    /** 公司名称 */
    companyName?: string;
    /** 职位 */
    position?: string;
    /** 所在城市 */
    city?: string;
    /** 问题描述 */
    content?: string;
  }

  interface Result_Long_ {
    /** 所在机器 IP */
    ip?: string;
    data?: number;
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

  type AdvertisementStateEnum = 'WAITING' | 'ONLINE' | 'OFFLINE';

  interface AdvertisementDetailVO {
    /** 广告id */
    id?: number;
    /** 广告名称 */
    name?: string;
    /** 上线时间 */
    onlineTime?: string;
    /** 下线时间 */
    offlineTime?: string;
    /** 广告主题 */
    subject?: string;
    /** 创建时间 */
    createTime?: string;
    /** 更新时间 */
    updateTime?: string;
    /** 广告链接 */
    linkUrl?: string;
    /** 广告banner图 */
    bannerVO?: ImageVO;
    /** 广告状态 */
    stateEnum?: AdvertisementStateEnum;
  }

  interface Result_AdvertisementDetailVO_ {
    /** 所在机器 IP */
    ip?: string;
    data?: AdvertisementDetailVO;
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
