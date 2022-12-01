import { IntlShape } from 'react-intl';

export const getFeats = (intl: IntlShape) => [
  {
    icon: 'https://mdn.alipayobjects.com/huamei_qcdryc/afts/img/A*HyAsS7lePq8AAAAAAAAAAAAADgOBAQ',
    title: intl.formatMessage({ id: 'product.feature.title0' }),
    desc: intl.formatMessage({ id: 'product.feature.desc0' }),
  },
  {
    icon: 'https://mdn.alipayobjects.com/huamei_qcdryc/afts/img/A*uSj9Taf6qYkAAAAAAAAAAAAADgOBAQ',
    title: intl.formatMessage({ id: 'product.feature.title1' }),
    desc: intl.formatMessage({ id: 'product.feature.desc1' }),
  },
  {
    icon: 'https://mdn.alipayobjects.com/huamei_qcdryc/afts/img/A*L6uISKhYj4wAAAAAAAAAAAAADgOBAQ',
    title: intl.formatMessage({ id: 'product.feature.title2' }),
    desc: intl.formatMessage({ id: 'product.feature.desc2' }),
  },
  {
    icon: 'https://mdn.alipayobjects.com/huamei_qcdryc/afts/img/A*MDNySqCfjJMAAAAAAAAAAAAADgOBAQ',
    title: intl.formatMessage({ id: 'product.feature.title3' }),
    desc: intl.formatMessage({ id: 'product.feature.desc3' }),
  },
];
