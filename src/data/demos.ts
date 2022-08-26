import { IntlShape } from 'react-intl';

export const getDemos = (intl: IntlShape) => [
  {
    title: intl.formatMessage({ id: 'demo.title0' }),
    desc: intl.formatMessage({ id: 'demo.desc0' }),
    type: intl.formatMessage({ id: 'demo.type0' }),
    iconUrl:
      'https://gw.alipayobjects.com/zos/bmw-prod/26097f9f-9674-432b-8d22-d631978b74a9.svg',
  },
  {
    title: intl.formatMessage({ id: 'demo.title1' }),
    desc: intl.formatMessage({ id: 'demo.desc1' }),
    type: intl.formatMessage({ id: 'demo.type1' }),
    iconUrl:
      'https://gw.alipayobjects.com/zos/bmw-prod/ccdbbf08-3510-48fd-b5cc-147c2e197604.svg',
  },
  {
    title: intl.formatMessage({ id: 'demo.title2' }),
    desc: intl.formatMessage({ id: 'demo.desc2' }),
    type: intl.formatMessage({ id: 'demo.type2' }),
    iconUrl:
      'https://gw.alipayobjects.com/zos/bmw-prod/5b3db1e8-3471-4485-9057-d57db43f1d2b.svg',
  },
  {
    title: intl.formatMessage({ id: 'demo.title3' }),
    desc: intl.formatMessage({ id: 'demo.desc3' }),
    type: intl.formatMessage({ id: 'demo.type3' }),
    iconUrl:
      'https://gw.alipayobjects.com/zos/bmw-prod/35a4808d-7a8e-4b9d-9acd-bf5fef98dece.svg',
  },
  {
    title: intl.formatMessage({ id: 'demo.title4' }),
    desc: intl.formatMessage({ id: 'demo.desc4' }),
    type: intl.formatMessage({ id: 'demo.type4' }),
    iconUrl:
      'https://gw.alipayobjects.com/zos/bmw-prod/bb1c6dc1-d5ef-49ab-8e18-9f4dc92d21ac.svg',
  },
  {
    title: intl.formatMessage({ id: 'demo.title5' }),
    desc: intl.formatMessage({ id: 'demo.desc5' }),
    type: intl.formatMessage({ id: 'demo.type5' }),
    iconUrl:
      'https://gw.alipayobjects.com/zos/bmw-prod/98d054a8-c41f-4237-b011-792a4027da9f.svg',
  },
];
