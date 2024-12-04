import { IntlShape } from 'react-intl';

export const getPartner = (intl: IntlShape) => [
  {
    title: intl.formatMessage({ id: 'ecosystem.type0.title' }),
    desc: intl.formatMessage({ id: 'ecosystem.type0.description' }),
    icon: 'https://mdn.alipayobjects.com/huamei_p63okt/afts/img/BBsHSrEfZZgAAAAAAAAAAAAADh8WAQFr/original',
    key: 'partner_1',
  },
  {
    title: intl.formatMessage({ id: 'ecosystem.type1.title' }),
    desc: intl.formatMessage({ id: 'ecosystem.type1.description' }),
    icon: 'https://mdn.alipayobjects.com/huamei_p63okt/afts/img/GR54QI3MVS8AAAAAAAAAAAAADh8WAQFr/original',
    key: 'partner_2',
  },
  {
    title: intl.formatMessage({ id: 'ecosystem.type2.title' }),
    desc: intl.formatMessage({ id: 'ecosystem.type2.description' }),
    icon: 'https://mdn.alipayobjects.com/huamei_p63okt/afts/img/NwzhRo-3LXkAAAAAAAAAAAAADh8WAQFr/original',
    key: 'partner_3',
  },
  {
    title: intl.formatMessage({ id: 'ecosystem.type3.title' }),
    desc: intl.formatMessage({ id: 'ecosystem.type3.description' }),
    icon: 'https://mdn.alipayobjects.com/huamei_p63okt/afts/img/v9s7QZMm2IAAAAAAAAAAAAAADh8WAQFr/original',
    key: 'partner_4',
  },
  {
    title: intl.formatMessage({ id: 'ecosystem.type4.title' }),
    desc: intl.formatMessage({ id: 'ecosystem.type4.description' }),
    icon: 'https://mdn.alipayobjects.com/huamei_p63okt/afts/img/mWdgRKPjlP0AAAAAAAAAAAAADh8WAQFr/original',
    key: 'partner_5',
  },
];

export const getPartnerReason = (intl: IntlShape) => [
  {
    src: 'https://mdn.alipayobjects.com/huamei_p63okt/afts/img/rvcCSZzirKAAAAAAAAAAAAAADh8WAQFr/original',
    support: intl.formatMessage({ id: 'ecosystem.support0' }),
    key: 'partner_reason_1',
  },
  {
    src: 'https://mdn.alipayobjects.com/huamei_p63okt/afts/img/-ohBRKMEHoMAAAAAAAAAAAAADh8WAQFr/original',
    support: intl.formatMessage({ id: 'ecosystem.support1' }),
    key: 'partner_reason_2',
  },
  {
    src: 'https://mdn.alipayobjects.com/huamei_p63okt/afts/img/6wwcSZRVakoAAAAAAAAAAAAADh8WAQFr/original',
    support: intl.formatMessage({ id: 'ecosystem.support2' }),
    key: 'partner_reason_3',
  },
  {
    src: 'https://mdn.alipayobjects.com/huamei_p63okt/afts/img/wkzBTJ3fnhwAAAAAAAAAAAAADh8WAQFr/original',
    support: intl.formatMessage({ id: 'ecosystem.support3' }),
    key: 'partner_reason_4',
  },
];
