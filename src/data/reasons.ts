import { IntlShape } from 'react-intl';

export const getReasons = (intl: IntlShape) => [
  {
    icon: 'https://gw.alipayobjects.com/zos/bmw-prod/6abd085e-613b-45f9-9881-8ff388d58179.svg',
    title: intl.formatMessage({ id: 'home.reason0' }),
    desc: intl.formatMessage({ id: 'home.reason.desc0' }),
  },
  {
    icon: 'https://gw.alipayobjects.com/zos/bmw-prod/148fc2da-01ab-4671-97f6-22555722bca1.svg',
    title: intl.formatMessage({ id: 'home.reason1' }),
    desc: intl.formatMessage({ id: 'home.reason.desc1' }),
  },
  {
    icon: 'https://gw.alipayobjects.com/zos/bmw-prod/327e7dd9-9b63-4a1a-837d-aa5d447d0607.svg',
    title: intl.formatMessage({ id: 'home.reason2' }),
    desc: intl.formatMessage({ id: 'home.reason.desc2' }),
  },
  {
    icon: 'https://gw.alipayobjects.com/zos/bmw-prod/0cb264ed-04d3-42b3-b5f0-0bd83170d6dc.svg',
    title: intl.formatMessage({ id: 'home.reason3' }),
    desc: intl.formatMessage({ id: 'home.reason.desc3' }),
  },
];
