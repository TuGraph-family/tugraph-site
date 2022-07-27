import { IntlShape } from 'react-intl';

export const getDemos = (intl: IntlShape) => [
  {
    title: intl.formatMessage({ id: 'demo.title0' }),
    desc: intl.formatMessage({ id: 'demo.desc0' }),
    type: intl.formatMessage({ id: 'demo.type0' }),
    iconUrl:
      'https://gw.alipayobjects.com/zos/bmw-prod/a9cb7a90-630b-454c-bd38-cc5bb63e9a3a.svg',
  },
  {
    title: intl.formatMessage({ id: 'demo.title1' }),
    desc: intl.formatMessage({ id: 'demo.desc1' }),
    type: intl.formatMessage({ id: 'demo.type1' }),
    iconUrl:
      'https://gw.alipayobjects.com/zos/bmw-prod/61a03f95-8bff-49b0-8441-b51398d905e4.svg',
  },
  {
    title: intl.formatMessage({ id: 'demo.title2' }),
    desc: intl.formatMessage({ id: 'demo.desc2' }),
    type: intl.formatMessage({ id: 'demo.type2' }),
    iconUrl:
      'https://gw.alipayobjects.com/zos/bmw-prod/da26ce1e-d36c-45b8-a90d-622fb4e742a7.svg',
  },
  {
    title: intl.formatMessage({ id: 'demo.title3' }),
    desc: intl.formatMessage({ id: 'demo.desc3' }),
    type: intl.formatMessage({ id: 'demo.type3' }),
    iconUrl:
      'https://gw.alipayobjects.com/zos/bmw-prod/6212583c-e31c-4d5e-8981-ab7e9055baad.svg',
  },
  {
    title: intl.formatMessage({ id: 'demo.title4' }),
    desc: intl.formatMessage({ id: 'demo.desc4' }),
    type: intl.formatMessage({ id: 'demo.type4' }),
    iconUrl:
      'https://gw.alipayobjects.com/zos/bmw-prod/ac1345c0-349a-4c58-b424-a55bfba3ae65.svg',
  },
  {
    title: intl.formatMessage({ id: 'demo.title5' }),
    desc: intl.formatMessage({ id: 'demo.desc5' }),
    type: intl.formatMessage({ id: 'demo.type5' }),
    iconUrl:
      'https://gw.alipayobjects.com/zos/bmw-prod/a42c9881-bfd6-4908-a598-885ae3efa7a2.svg',
  },
];
