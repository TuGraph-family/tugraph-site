import { IntlShape } from 'react-intl';

export const getReasons = (intl: IntlShape) => [
  {
    icon: 'https://mdn.alipayobjects.com/huamei_qcdryc/afts/img/A*RvNAR4YguRMAAAAAAAAAAAAADgOBAQ',
    title: intl.formatMessage({ id: 'home.reason0' }),
    desc: intl.formatMessage({ id: 'home.reason.desc0' }),
  },
  {
    icon: 'https://mdn.alipayobjects.com/huamei_qcdryc/afts/img/A*nnh4SL7cJgIAAAAAAAAAAAAADgOBAQ',
    title: intl.formatMessage({ id: 'home.reason1' }),
    desc: intl.formatMessage({ id: 'home.reason.desc1' }),
  },
  {
    icon: 'https://mdn.alipayobjects.com/huamei_qcdryc/afts/img/A*4lBjRYpPktAAAAAAAAAAAAAADgOBAQ/original',
    title: intl.formatMessage({ id: 'home.reason2' }),
    desc: intl.formatMessage({ id: 'home.reason.desc2' }),
  },
  {
    icon: 'https://mdn.alipayobjects.com/huamei_qcdryc/afts/img/A*SWkiT5NDAG8AAAAAAAAAAAAADgOBAQ/original',
    title: intl.formatMessage({ id: 'home.reason3' }),
    desc: intl.formatMessage({ id: 'home.reason.desc3' }),
  },
];
