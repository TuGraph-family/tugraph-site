import { IntlShape } from 'react-intl';

export const getPartnerReason = (intl: IntlShape) => [
  {
    src: 'https://mdn.alipayobjects.com/huamei_qcdryc/afts/img/A*DzUBT6XHsoQAAAAAAAAAAAAADgOBAQ/original',
    span: 12,
    support: intl.formatMessage({ id: 'ecosystem.support0' }),
  },
  {
    src: 'https://mdn.alipayobjects.com/huamei_qcdryc/afts/img/A*pQmRRojVUAYAAAAAAAAAAAAADgOBAQ/original',
    span: 12,
    support: intl.formatMessage({ id: 'ecosystem.support1' }),
  },
  {
    src: 'https://mdn.alipayobjects.com/huamei_qcdryc/afts/img/A*wAG-S4qKobUAAAAAAAAAAAAADgOBAQ/original',
    span: 12,
    support: intl.formatMessage({ id: 'ecosystem.support2' }),
  },
  {
    src: 'https://mdn.alipayobjects.com/huamei_qcdryc/afts/img/A*jwxvT7iWuY8AAAAAAAAAAAAADgOBAQ/original',
    span: 12,
    support: intl.formatMessage({ id: 'ecosystem.support3' }),
  },
];
