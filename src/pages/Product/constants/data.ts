import { IntlShape } from 'react-intl';

export const getIntros = (intl: IntlShape, type?: string) => {
  switch (type) {
    case 'db':
      return {
        desc: intl.formatMessage({ id: 'product.db.overview.desc' }),
        list: [
          {
            title: intl.formatMessage({ id: 'product.db.title' }),
            desc: intl.formatMessage({ id: 'product.db.desc' }),
            img: 'https://mdn.alipayobjects.com/huamei_p63okt/afts/img/2qmKRIxCfGMAAAAAQUAAAAgAeh8WAQFr/fmt.avif',
            span: 15,
            key: 'db_1',
          },
          {
            title: intl.formatMessage({ id: 'product.db.title1' }),
            desc: intl.formatMessage({ id: 'product.db.desc1' }),
            img: 'https://mdn.alipayobjects.com/huamei_p63okt/afts/img/9W11R7hcmTEAAAAAQoAAAAgAeh8WAQFr/fmt.avif',
            span: 9,
            key: 'db_2',
          },
          {
            title: intl.formatMessage({ id: 'product.db.title2' }),
            desc: intl.formatMessage({ id: 'product.db.desc2' }),
            img: 'https://mdn.alipayobjects.com/huamei_p63okt/afts/img/unEYRK7cIg0AAAAAQiAAAAgAeh8WAQFr/fmt.avif',
            span: 9,
            key: 'db_3',
          },
          {
            title: intl.formatMessage({ id: 'product.db.title3' }),
            desc: intl.formatMessage({ id: 'product.db.desc3' }),
            img: 'https://mdn.alipayobjects.com/huamei_p63okt/afts/img/yU1RSpv4lrIAAAAAQUAAAAgAeh8WAQFr/fmt.avif',
            span: 15,
            key: 'db_4',
          },
        ],
      };
    case 'analytics':
      return {
        desc: intl.formatMessage({ id: 'product.analytics.overview.desc' }),
        list: [
          {
            title: intl.formatMessage({
              id: 'product.analytics.title',
            }),
            desc: intl.formatMessage({ id: 'product.analytics.desc' }),
            img: 'https://mdn.alipayobjects.com/huamei_p63okt/afts/img/VcDIT6RXIekAAAAAQYAAAAgAeh8WAQFr/fmt.avif',
            span: 15,
            key: 'analytics_1',
          },
          {
            title: intl.formatMessage({
              id: 'product.analytics.title1',
            }),
            desc: intl.formatMessage({ id: 'product.analytics.desc1' }),
            img: 'https://mdn.alipayobjects.com/huamei_p63okt/afts/img/wMmyQ6DMZ6AAAAAAQoAAAAgAeh8WAQFr/fmt.avif',
            span: 9,
            key: 'analytics_2',
          },
          {
            title: intl.formatMessage({
              id: 'product.analytics.title2',
            }),
            desc: intl.formatMessage({ id: 'product.analytics.desc2' }),
            img: 'https://mdn.alipayobjects.com/huamei_p63okt/afts/img/-IKoRLcBqtQAAAAAQfAAAAgAeh8WAQFr/fmt.avif',
            span: 9,
            key: 'analytics_3',
          },
          {
            title: intl.formatMessage({
              id: 'product.analytics.title3',
            }),
            desc: intl.formatMessage({ id: 'product.analytics.desc3' }),
            img: 'https://mdn.alipayobjects.com/huamei_p63okt/afts/img/DFd8TaQ0DM0AAAAAQTAAAAgAeh8WAQFr/fmt.avif',
            span: 15,
            key: 'analytics_4',
          },
          {
            title: intl.formatMessage({
              id: 'product.analytics.title4',
            }),
            desc: intl.formatMessage({ id: 'product.analytics.desc4' }),
            img: 'https://mdn.alipayobjects.com/huamei_p63okt/afts/img/KWXuRpNnmhEAAAAAQaAAAAgAeh8WAQFr/fmt.avif',
            span: 15,
            key: 'analytics_5',
          },
          {
            title: intl.formatMessage({
              id: 'product.analytics.title5',
            }),
            desc: intl.formatMessage({ id: 'product.analytics.desc5' }),
            img: 'https://mdn.alipayobjects.com/huamei_p63okt/afts/img/_vKGSrHRw4AAAAAAQgAAAAgAeh8WAQFr/fmt.avif',
            span: 9,
            key: 'analytics_6',
          },
        ],
      };
    case 'enterprise':
      return {
        desc: intl.formatMessage({
          id: 'product.enterprise.overview.desc',
        }),
        list: [
          {
            title: intl.formatMessage({
              id: 'product.enterprise.title',
            }),
            desc: intl.formatMessage({ id: 'product.enterprise.desc' }),
            img: 'https://mdn.alipayobjects.com/huamei_p63okt/afts/img/cikQRI9h5UUAAAAAQXAAAAgAeh8WAQFr/fmt.avif',
            span: 15,
            key: 'enterprise_1',
          },
          {
            title: intl.formatMessage({
              id: 'product.enterprise.title1',
            }),
            desc: intl.formatMessage({ id: 'product.enterprise.desc1' }),
            img: 'https://mdn.alipayobjects.com/huamei_p63okt/afts/img/YzhyRoS7Q7sAAAAAQnAAAAgAeh8WAQFr/fmt.avif',
            span: 9,
            key: 'enterprise_2',
          },
          {
            title: intl.formatMessage({
              id: 'product.enterprise.title2',
            }),
            desc: intl.formatMessage({ id: 'product.enterprise.desc2' }),
            img: 'https://mdn.alipayobjects.com/huamei_p63okt/afts/img/BkR6T6YCZuYAAAAAQoAAAAgAeh8WAQFr/fmt.avif',
            span: 9,
            key: 'enterprise_3',
          },
          {
            title: intl.formatMessage({
              id: 'product.enterprise.title3',
            }),
            desc: intl.formatMessage({ id: 'product.enterprise.desc3' }),
            img: 'https://mdn.alipayobjects.com/huamei_p63okt/afts/img/uPFVQL6WmccAAAAAQZAAAAgAeh8WAQFr/fmt.avif',
            span: 15,
            key: 'enterprise_4',
          },
        ],
      };
    case 'cloud':
      return {
        desc: intl.formatMessage({ id: 'product.overview.cloud.desc' }),
        list: [
          {
            title: intl.formatMessage({ id: 'product.cloud.title' }),
            desc: intl.formatMessage({ id: 'product.cloud.desc' }),
            img: 'https://mdn.alipayobjects.com/huamei_p63okt/afts/img/rhsiTrGRLzIAAAAAQWAAAAgAeh8WAQFr/fmt.avif',
            span: 15,
            key: 'cloud_1',
          },
          {
            title: intl.formatMessage({ id: 'product.cloud.title1' }),
            desc: intl.formatMessage({ id: 'product.cloud.desc1' }),
            img: 'https://mdn.alipayobjects.com/huamei_p63okt/afts/img/EHauQJwb8lIAAAAAQkAAAAgAeh8WAQFr/fmt.avif',
            span: 9,
            key: 'cloud_2',
          },
          {
            title: intl.formatMessage({ id: 'product.cloud.title2' }),
            desc: intl.formatMessage({ id: 'product.cloud.desc2' }),
            img: 'https://mdn.alipayobjects.com/huamei_p63okt/afts/img/bEGNTIiX64gAAAAAQkAAAAgAeh8WAQFr/fmt.avif',
            span: 9,
            key: 'cloud_3',
          },
          {
            title: intl.formatMessage({ id: 'product.cloud.title3' }),
            desc: intl.formatMessage({ id: 'product.cloud.desc3' }),
            img: 'https://mdn.alipayobjects.com/huamei_p63okt/afts/img/HaUXQagJdZoAAAAAQVAAAAgAeh8WAQFr/fmt.avif',
            span: 15,
            key: 'cloud_4',
          },
        ],
      };
    default:
      return {};
  }
};

export const getSteps = (intl: IntlShape) => [
  {
    stepKey: '1',
    title: intl.formatMessage({ id: 'product.quickStart.title' }),
    desc: intl.formatMessage({ id: 'product.quickStart.desc' }),
  },
  {
    stepKey: '2',
    title: intl.formatMessage({ id: 'product.quickStart.title1' }),
    desc: intl.formatMessage({ id: 'product.quickStart.desc1' }),
  },
  {
    stepKey: '3',
    title: intl.formatMessage({ id: 'product.quickStart.title2' }),
    desc: intl.formatMessage({ id: 'product.quickStart.desc2' }),
  },
];
