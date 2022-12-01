import { IntlShape } from 'react-intl';

export const getReasons = (intl: IntlShape) => [
  {
    icon: 'https://mdn.alipayobjects.com/mdn/huamei_qcdryc/afts/img/A*G13RQacrPWsAAAAAAAAAAAAADgOBAQ',
    title: intl.formatMessage({ id: 'home.reason0' }),
    desc: intl.formatMessage({ id: 'home.reason.desc0' }),
  },
  {
    icon: 'https://mdn.alipayobjects.com/mdn/huamei_qcdryc/afts/img/A*6fATQJKH6I0AAAAAAAAAAAAADgOBAQ',
    title: intl.formatMessage({ id: 'home.reason1' }),
    desc: intl.formatMessage({ id: 'home.reason.desc1' }),
  },
  {
    icon: 'https://mdn.alipayobjects.com/mdn/huamei_qcdryc/afts/img/A*xIS3RabjxIIAAAAAAAAAAAAADgOBAQ',
    title: intl.formatMessage({ id: 'home.reason2' }),
    desc: intl.formatMessage({ id: 'home.reason.desc2' }),
  },
  {
    icon: 'https://mdn.alipayobjects.com/mdn/huamei_qcdryc/afts/img/A*YJUNSoLEhS0AAAAAAAAAAAAADgOBAQ',
    title: intl.formatMessage({ id: 'home.reason3' }),
    desc: intl.formatMessage({ id: 'home.reason.desc3' }),
  },
];
