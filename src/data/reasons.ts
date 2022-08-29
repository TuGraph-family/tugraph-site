import { IntlShape } from 'react-intl';

export const getReasons = (intl: IntlShape) => [
  {
    icon: 'https://gw.alipayobjects.com/mdn/rms_fa12c2/afts/img/A*VJnhSZIFm28AAAAAAAAAAAAAARQnAQ',
    title: intl.formatMessage({ id: 'home.reason0' }),
    desc: intl.formatMessage({ id: 'home.reason.desc0' }),
  },
  {
    icon: 'https://gw.alipayobjects.com/mdn/rms_fa12c2/afts/img/A*aMr6QL8NRi8AAAAAAAAAAAAAARQnAQ',
    title: intl.formatMessage({ id: 'home.reason1' }),
    desc: intl.formatMessage({ id: 'home.reason.desc1' }),
  },
  {
    icon: 'https://gw.alipayobjects.com/mdn/rms_fa12c2/afts/img/A*dZtISZblXU4AAAAAAAAAAAAAARQnAQ',
    title: intl.formatMessage({ id: 'home.reason2' }),
    desc: intl.formatMessage({ id: 'home.reason.desc2' }),
  },
  {
    icon: 'https://gw.alipayobjects.com/mdn/rms_fa12c2/afts/img/A*Ws5KTqPsS7EAAAAAAAAAAAAAARQnAQ',
    title: intl.formatMessage({ id: 'home.reason3' }),
    desc: intl.formatMessage({ id: 'home.reason.desc3' }),
  },
];
