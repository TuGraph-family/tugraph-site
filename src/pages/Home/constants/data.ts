import { IntlShape } from 'react-intl';

export const getSceneList = (intl: IntlShape) => [
  // 金融
  {
    field: intl.formatMessage({ id: 'home.case0.title' }),
    scene: intl.formatMessage({ id: 'home.case0.desc' }),
    illustrate: intl.formatMessage({ id: 'home.case0.illustrate' }),
    style: {
      top: 0,
      left: '372px',
      width: '170px',
      height: '170px',
    },
    icon: 'https://mdn.alipayobjects.com/huamei_p63okt/afts/img/u2M8T4tM2FgAAAAAAAAAAAAADh8WAQFr/original',
    className: 'government',
  },
  // 互联网
  {
    field: intl.formatMessage({ id: 'home.case1.title' }),
    scene: intl.formatMessage({ id: 'home.case1.desc' }),
    illustrate: intl.formatMessage({ id: 'home.case1.illustrate' }),
    style: {
      width: '134px',
      height: '135px',
      top: '250px',
      right: 0,
    },
    icon: 'https://mdn.alipayobjects.com/huamei_p63okt/afts/img/zFjEQ4vWuIUAAAAAAAAAAAAADh8WAQFr/original',
    className: 'finance',
  },
  // 政务
  {
    field: intl.formatMessage({ id: 'home.case2.title' }),
    scene: intl.formatMessage({ id: 'home.case2.desc' }),
    illustrate: intl.formatMessage({ id: 'home.case2.illustrate' }),
    style: {
      top: '109px',
      left: 0,
      width: '134px',
      height: '135px',
    },
    icon: 'https://mdn.alipayobjects.com/huamei_p63okt/afts/img/MgOtSK07LH8AAAAAAAAAAAAADh8WAQFr/original',
    className: 'telecommunications',
  },
  //工业
  {
    field: intl.formatMessage({ id: 'home.case3.title' }),
    scene: intl.formatMessage({ id: 'home.case3.desc' }),
    illustrate: intl.formatMessage({ id: 'home.case3.illustrate' }),
    style: {
      top: '239px',
      left: '223px',
      width: '110px',
      height: '110px',
    },
    icon: 'https://mdn.alipayobjects.com/huamei_p63okt/afts/img/Z7ucTICP7P8AAAAAAAAAAAAADh8WAQFr/original',
    className: 'industry',
  },
  //电信
  {
    field: intl.formatMessage({ id: 'home.case4.title' }),
    scene: intl.formatMessage({ id: 'home.case4.desc' }),
    illustrate: intl.formatMessage({ id: 'home.case4.illustrate' }),
    style: {
      top: '61px',
      right: '67px',
      width: '110px',
      height: '110px',
    },
    icon: 'https://mdn.alipayobjects.com/huamei_p63okt/afts/img/lvB2T5JgB1oAAAAAAAAAAAAADh8WAQFr/original',
    className: 'internet',
  },
  // 通用
  {
    field: intl.formatMessage({ id: 'home.case5.title' }),
    scene: intl.formatMessage({ id: 'home.case5.desc' }),
    illustrate: intl.formatMessage({ id: 'home.case5.illustrate' }),
    style: {
      width: '110px',
      height: '110px',
      top: '468px',
      left: '312px',
    },
    icon: 'https://mdn.alipayobjects.com/huamei_p63okt/afts/img/L5faRonbxpcAAAAAAAAAAAAADh8WAQFr/original',
    className: 'Universal',
  },
  // 人工智能
  {
    field: intl.formatMessage({ id: 'home.case6.title' }),
    scene: '',
    illustrate: intl.formatMessage({ id: 'home.case6.illustrate' }),
    style: {
      width: '110px',
      height: '110px',
      top: '370px',
      right: '214px',
    },
    icon: 'https://mdn.alipayobjects.com/huamei_p63okt/afts/img/ziLVQ6zbV1IAAAAAAAAAAAAADh8WAQFr/original',
    className: 'Artificial',
  },
];

export const getReason = (intl: IntlShape) => [
  {
    title: intl.formatMessage({ id: 'home.reason0' }),
    content: intl.formatMessage({ id: 'home.reason.desc0' }),
    path: 'M6.4 25.6H25.6V6.4H6.4V25.6ZM19.2 28.8H12.8V32H9.6V28.8H4.8C3.91635 28.8 3.2 28.0837 3.2 27.2V22.4H0V19.2H3.2V12.8H0V9.6H3.2V4.8C3.2 3.91635 3.91635 3.2 4.8 3.2H9.6V0H12.8V3.2H19.2V0H22.4V3.2H27.2C28.0837 3.2 28.8 3.91635 28.8 4.8V9.6H32V12.8H28.8V19.2H32V22.4H28.8V27.2C28.8 28.0837 28.0837 28.8 27.2 28.8H22.4V32H19.2V28.8ZM9.6 9.6H22.4V22.4H9.6V9.6Z',
    key: 'reason_1',
  },
  {
    title: intl.formatMessage({ id: 'home.reason1' }),
    content: intl.formatMessage({ id: 'home.reason.desc1' }),
    key: 'reason_2',
    path: 'M30 15V18H0V15H3V1.4931C3 0.668475 3.66726 0 4.49337 0H19.5L26.9996 7.5L27 15H30ZM1.5 21H4.5V30H1.5V21ZM25.5 21H28.5V30H25.5V21ZM19.5 21H22.5V30H19.5V21ZM13.5 21H16.5V30H13.5V21ZM7.5 21H10.5V30H7.5V21Z',
  },
  {
    title: intl.formatMessage({ id: 'home.reason2' }),
    content: intl.formatMessage({ id: 'home.reason.desc2' }),
    key: 'reason_3',
    path: 'M18.8284 13.9723C18.3077 13.4515 17.4635 13.4515 16.9428 13.9723L16 14.9151C14.9585 15.9564 13.2701 15.9564 12.2287 14.9151C11.1873 13.8736 11.1873 12.1852 12.2287 11.1438L19.7363 3.63424C22.5415 2.99964 25.6011 3.77433 27.7851 5.95833C31.0109 9.18415 31.1621 14.3203 28.2389 17.7252L25.428 20.5719L18.8284 13.9723ZM4.21484 5.95833C7.11269 3.06048 11.5521 2.64377 14.8933 4.70821L10.3431 9.25816C8.26031 11.341 8.26031 14.7179 10.3431 16.8007C12.3628 18.8203 15.5993 18.8815 17.6927 16.9843L17.8856 16.8007L23.5424 22.4575L17.8856 28.1144C16.8441 29.1557 15.1557 29.1557 14.1144 28.1144L4.21484 18.2148C0.830296 14.8303 0.830296 9.34287 4.21484 5.95833Z',
  },
  {
    title: intl.formatMessage({ id: 'home.reason3' }),
    content: intl.formatMessage({ id: 'home.reason.desc3' }),
    key: 'reason_4',
    path: 'M28 21.7778C28 25.2142 25.2142 28 21.7778 28C18.3414 28 15.5556 25.2142 15.5556 21.7778C15.5556 18.3414 18.3414 15.5556 21.7778 15.5556C25.2142 15.5556 28 18.3414 28 21.7778ZM12.4444 6.22222C12.4444 9.65866 9.65866 12.4444 6.22222 12.4444C2.78578 12.4444 0 9.65866 0 6.22222C0 2.78578 2.78578 0 6.22222 0C9.65866 0 12.4444 2.78578 12.4444 6.22222ZM28 6.22222C28 9.65866 25.2142 12.4444 21.7778 12.4444C20.6242 12.4444 19.5431 12.129 18.6166 11.5816L11.5816 18.6166C12.129 19.5431 12.4444 20.6242 12.4444 21.7778C12.4444 25.2142 9.65866 28 6.22222 28C2.78578 28 0 25.2142 0 21.7778C0 18.3414 2.78578 15.5556 6.22222 15.5556C7.37514 15.5556 8.45589 15.8701 9.38194 16.4169L16.4169 9.38194C15.8701 8.45589 15.5556 7.37514 15.5556 6.22222C15.5556 2.78578 18.3414 0 21.7778 0C25.2142 0 28 2.78578 28 6.22222Z',
  },
  {
    title: intl.formatMessage({ id: 'home.reason4' }),
    content: intl.formatMessage({ id: 'home.reason.desc4' }),
    key: 'reason_5',
    path: 'M25 16.8V26.6C25 27.3732 24.3782 28 23.6111 28H1.38889C0.621833 28 0 27.3732 0 26.6V16.8C1.53412 16.8 2.77777 15.5464 2.77777 14C2.77777 12.4536 1.53412 11.2 0 11.2V1.4C0 0.626808 0.621833 0 1.38889 0H23.6111C24.3782 0 25 0.626808 25 1.4V11.2C23.4658 11.2 22.2222 12.4536 22.2222 14C22.2222 15.5464 23.4658 16.8 25 16.8ZM8.33332 5.6V8.39999H16.6667V5.6H8.33332ZM8.33332 19.6V22.4H16.6667V19.6H8.33332Z',
  },
];
