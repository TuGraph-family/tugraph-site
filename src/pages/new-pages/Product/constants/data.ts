import { IntlShape } from 'react-intl';

export const getVideos = (intl: IntlShape) => [
  {
    url: 'https://gw.alipayobjects.com/os/bmw-prod/2145f227-08f0-435a-abe6-7f503b65da7d.mov',
    title: intl.formatMessage({ id: 'product.video0' }),
    length: '02:39',
    key: 'video_1',
  },
  {
    url: 'https://gw.alipayobjects.com/os/bmw-prod/2145f227-08f0-435a-abe6-7f503b65da7d.mov',
    title: intl.formatMessage({ id: 'product.video1' }),
    length: '02:39',
    key: 'video_2',
  },
  {
    url: 'https://gw.alipayobjects.com/os/bmw-prod/2145f227-08f0-435a-abe6-7f503b65da7d.mov',
    title: intl.formatMessage({ id: 'product.video2' }),
    length: '02:39',
    key: 'video_3',
  },
];

export const getIntros = (intl: IntlShape, type?: string) => {
  switch (type) {
    case 'db':
      return {
        desc: intl.formatMessage({ id: 'product.introduction0' }),
        list: [
          {
            title: intl.formatMessage({ id: 'product.feature.title0' }),
            desc: intl.formatMessage({ id: 'product.feature.desc0' }),
            img: 'https://mdn.alipayobjects.com/huamei_p63okt/afts/img/9u-MTL-YQDAAAAAAAAAAAAAADh8WAQFr/original',
            span: 16,
            key: 'db_1',
          },
          {
            title: intl.formatMessage({ id: 'product.feature.title1' }),
            desc: intl.formatMessage({ id: 'product.feature.desc1' }),
            span: 8,
            key: 'db_2',
          },
          {
            title: intl.formatMessage({ id: 'product.feature.title2' }),
            desc: intl.formatMessage({ id: 'product.feature.desc2' }),
            span: 8,
            key: 'db_3',
          },
          {
            title: intl.formatMessage({ id: 'product.feature.title3' }),
            desc: intl.formatMessage({ id: 'product.feature.desc3' }),
            img: 'https://mdn.alipayobjects.com/huamei_p63okt/afts/img/QHv2TYUyUesAAAAAAAAAAAAADh8WAQFr/original',
            span: 16,
            key: 'db_4',
          },
        ],
      };
    case 'analytics':
      return {
        desc: intl.formatMessage({ id: 'product_analytics.introfuction' }),
        list: [
          {
            title: intl.formatMessage({
              id: 'product_analytics.feature.title0',
            }),
            desc: intl.formatMessage({ id: 'product_analytics.feature.desc0' }),
            span: 8,
            key: 'analytics_1',
          },
          {
            title: intl.formatMessage({
              id: 'product_analytics.feature.title1',
            }),
            desc: intl.formatMessage({ id: 'product_analytics.feature.desc1' }),
            span: 8,
            key: 'analytics_2',
          },
          {
            title: intl.formatMessage({
              id: 'product_analytics.feature.title2',
            }),
            desc: intl.formatMessage({ id: 'product_analytics.feature.desc2' }),
            span: 8,
            key: 'analytics_3',
          },
          {
            title: intl.formatMessage({
              id: 'product_analytics.feature.title3',
            }),
            desc: intl.formatMessage({ id: 'product_analytics.feature.desc3' }),
            span: 8,
            key: 'analytics_4',
          },
          {
            title: intl.formatMessage({
              id: 'product_analytics.feature.title4',
            }),
            desc: intl.formatMessage({ id: 'product_analytics.feature.desc4' }),
            span: 8,
            key: 'analytics_5',
          },
          {
            title: intl.formatMessage({
              id: 'product_analytics.feature.title5',
            }),
            desc: intl.formatMessage({ id: 'product_analytics.feature.desc5' }),
            span: 8,
            key: 'analytics_6',
          },
        ],
      };
    case 'learn':
      return {
        desc: intl.formatMessage({ id: 'product_learn.introfuction' }),
        list: [
          {
            title: intl.formatMessage({ id: 'product_learn.feature.title0' }),
            desc: intl.formatMessage({ id: 'product_learn.feature.desc0' }),
            span: 12,
            key: 'learn_1',
          },
          {
            title: intl.formatMessage({ id: 'product_learn.feature.title1' }),
            desc: intl.formatMessage({ id: 'product_learn.feature.desc1' }),
            span: 12,
            key: 'learn_2',
          },
          {
            title: intl.formatMessage({ id: 'product_learn.feature.title2' }),
            desc: intl.formatMessage({ id: 'product_learn.feature.desc2' }),
            span: 12,
            key: 'learn_3',
          },
          {
            title: intl.formatMessage({ id: 'product_learn.feature.title3' }),
            desc: intl.formatMessage({ id: 'product_learn.feature.desc3' }),
            span: 12,
            key: 'learn_4',
          },
        ],
      };
    case 'enterprise':
      return {
        desc: intl.formatMessage({
          id: 'product.feature.overview.introduction0',
        }),
        list: [
          {
            title: intl.formatMessage({
              id: 'product.feature.overview.title0',
            }),
            desc: intl.formatMessage({ id: 'product.feature.overview.desc0' }),
            img: 'https://mdn.alipayobjects.com/huamei_p63okt/afts/img/9u-MTL-YQDAAAAAAAAAAAAAADh8WAQFr/original',
            span: 16,
            key: 'enterprise_1',
          },
          {
            title: intl.formatMessage({
              id: 'product.feature.overview.title1',
            }),
            desc: intl.formatMessage({ id: 'product.feature.overview.desc1' }),
            span: 8,
            key: 'enterprise_2',
          },
          {
            title: intl.formatMessage({
              id: 'product.feature.overview.title2',
            }),
            desc: intl.formatMessage({ id: 'product.feature.overview.desc2' }),
            span: 8,
            key: 'enterprise_3',
          },
          {
            title: intl.formatMessage({
              id: 'product.feature.overview.title3',
            }),
            desc: intl.formatMessage({ id: 'product.feature.overview.desc3' }),
            img: 'https://mdn.alipayobjects.com/huamei_p63okt/afts/img/QHv2TYUyUesAAAAAAAAAAAAADh8WAQFr/original',
            span: 16,
            key: 'enterprise_4',
          },
        ],
      };
    case 'clound':
      return {
        desc: intl.formatMessage({ id: 'product.overview.clound.desc' }),
        list: [
          {
            title: intl.formatMessage({ id: 'product.clound.title' }),
            desc: intl.formatMessage({ id: 'product.clound.desc' }),
            span: 12,
            key: 'clound_1',
          },
          {
            title: intl.formatMessage({ id: 'product.clound.title1' }),
            desc: intl.formatMessage({ id: 'product.clound.desc1' }),
            span: 12,
            key: 'clound_2',
          },
          {
            title: intl.formatMessage({ id: 'product.clound.title2' }),
            desc: intl.formatMessage({ id: 'product.clound.desc2' }),
            span: 12,
            key: 'clound_3',
          },
          {
            title: intl.formatMessage({ id: 'product.clound.title3' }),
            desc: intl.formatMessage({ id: 'product.clound.desc3' }),
            span: 12,
            key: 'clound_4',
          },
        ],
      };
    default:
      return {};
  }
};

export const getSteps = (intl: IntlShape) => [
  {
    stepKey: '01',
    title: intl.formatMessage({ id: 'home.quickStart.step1.title' }),
    icon: 'https://mdn.alipayobjects.com/huamei_p63okt/afts/img/U3jfTLMQ7LMAAAAAAAAAAAAADh8WAQFr/original',
    descList: [intl.formatMessage({ id: 'home.quickStart.step1.desc1' })],
  },
  {
    stepKey: '02',
    title: intl.formatMessage({ id: 'home.quickStart.step2.title' }),
    icon: 'https://mdn.alipayobjects.com/huamei_p63okt/afts/img/kE7XSITCy3sAAAAAAAAAAAAADh8WAQFr/original',
    descList: [
      intl.formatMessage({ id: 'home.quickStart.step2.desc1' }),
      intl.formatMessage({ id: 'home.quickStart.step2.desc2' }),
      intl.formatMessage({ id: 'home.quickStart.step2.desc3' }),
    ],
  },
  {
    stepKey: '03',
    title: intl.formatMessage({ id: 'home.quickStart.step3.title' }),
    icon: 'https://mdn.alipayobjects.com/huamei_p63okt/afts/img/cZEPT4MxZ3gAAAAAAAAAAAAADh8WAQFr/original',
    descList: [
      intl.formatMessage({ id: 'home.quickStart.step3.desc1' }),
      intl.formatMessage({ id: 'home.quickStart.step3.desc2' }),
      intl.formatMessage({ id: 'home.quickStart.step3.desc3' }),
    ],
  },
];

export const getCaseList = (intl: IntlShape) => [
  {
    logo: 'https://mdn.alipayobjects.com/huamei_p63okt/afts/img/2HtGRr1gZbUAAAAAAAAAAAAADh8WAQFr/original',
    desc: intl.formatMessage({ id: 'product.case.desc1' }),
    key: 'case_1',
  },
  {
    logo: 'https://mdn.alipayobjects.com/huamei_p63okt/afts/img/uO3BSZxK0A8AAAAAAAAAAAAADh8WAQFr/original',
    desc: intl.formatMessage({ id: 'product.case.desc2' }),
    key: 'case_2',
  },
  {
    logo: 'https://mdn.alipayobjects.com/huamei_p63okt/afts/img/c4Z6Qrwp8ToAAAAAAAAAAAAADh8WAQFr/original',
    desc: intl.formatMessage({ id: 'product.case.desc3' }),
    key: 'case_3',
  },
  {
    logo: 'https://mdn.alipayobjects.com/huamei_p63okt/afts/img/wKz-ToQrIBAAAAAAAAAAAAAADh8WAQFr/original',
    desc: intl.formatMessage({ id: 'product.case.desc4' }),
    key: 'case_4',
  },
];
