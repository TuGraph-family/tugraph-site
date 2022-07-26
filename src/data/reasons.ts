import { IntlShape } from 'react-intl';

export const getReasons = (intl: IntlShape) => [
  {
    icon: 'https://gw.alipayobjects.com/zos/bmw-prod/a857ccc8-fa90-4505-9011-79de5d1cfdd9.svg',
    title: intl.formatMessage({ id: 'home.reason0' }),
    desc: intl.formatMessage({ id: 'home.reason.desc0' }),
  },
  {
    icon: 'https://gw.alipayobjects.com/zos/bmw-prod/db35b305-00ce-4e4c-903d-bc8b6f207dfe.svg',
    title: intl.formatMessage({ id: 'home.reason1' }),
    desc: intl.formatMessage({ id: 'home.reason.desc1' }),
  },
  {
    icon: 'https://gw.alipayobjects.com/zos/bmw-prod/6e588b1a-94c4-41aa-a096-72b249dd71b3.svg',
    title: intl.formatMessage({ id: 'home.reason2' }),
    desc: intl.formatMessage({ id: 'home.reason.desc2' }),
  },
  {
    icon: 'https://gw.alipayobjects.com/zos/bmw-prod/d2afb1b2-25cc-4a0d-9b1b-3aff691d353a.svg',
    title: intl.formatMessage({ id: 'home.reason3' }),
    desc: intl.formatMessage({ id: 'home.reason.desc3' }),
  },
];
