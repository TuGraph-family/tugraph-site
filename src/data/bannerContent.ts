import { IntlShape } from 'react-intl';
export const getBannerContentList = (intl: IntlShape) => [
  {
    logo: 'https://mdn.alipayobjects.com/huamei_qcdryc/afts/img/A*BCemQbH1lsYAAAAAAAAAAAAADgOBAQ/original',
    title: intl.formatMessage({ id: 'home.banner.title' }),
    mobileTitle: intl.formatMessage({ id: 'home.banner.mobileTitle' }),
    description: intl.formatMessage({ id: 'home.banner.desc' }),
    description1: intl.formatMessage({ id: 'home.banner.desc1' }),
    description2: intl.formatMessage({ id: 'home.banner.desc2' }),
    description3: intl.formatMessage({ id: 'home.banner.desc3' }),
    description4: intl.formatMessage({ id: 'home.banner.desc4' }),
    registrationTime: intl.formatMessage({
      id: 'home.banner.registrationTime',
    }),
    weChat: intl.formatMessage({ id: 'home.banner.weChat' }),
    weChatDesc: intl.formatMessage({ id: 'home.banner.weChatDesc' }),
    btnText: intl.formatMessage({ id: 'home.banner.btnText' }),
  },
];
