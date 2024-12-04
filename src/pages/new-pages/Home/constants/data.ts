import { IntlShape } from 'react-intl';

export const getSceneList = (intl: IntlShape) => [
  {
    field: intl.formatMessage({ id: 'home.case0.title' }),
    scene: intl.formatMessage({ id: 'home.case0.desc' }),
    illustrate: intl.formatMessage({ id: 'home.case0.illustrate' }),
    style: {
      top: '109px',
      left: 0,
      width: '134px',
      height: '135px',
      background:
        'url(https://mdn.alipayobjects.com/huamei_p63okt/afts/img/u2M8T4tM2FgAAAAAAAAAAAAADh8WAQFr/original) 0 0 / 100% 100%',
    },
    className: 'government',
  },
  {
    field: intl.formatMessage({ id: 'home.case1.title' }),
    scene: intl.formatMessage({ id: 'home.case1.desc' }),
    illustrate: intl.formatMessage({ id: 'home.case1.illustrate' }),
    style: {
      top: 0,
      left: '372px',
      width: '170px',
      height: '170px',
      background:
        'url(https://mdn.alipayobjects.com/huamei_p63okt/afts/img/zFjEQ4vWuIUAAAAAAAAAAAAADh8WAQFr/original) 0 0 / 100% 100%',
    },
    className: 'finance',
  },
  {
    field: intl.formatMessage({ id: 'home.case2.title' }),
    scene: intl.formatMessage({ id: 'home.case2.desc' }),
    illustrate: intl.formatMessage({ id: 'home.case2.illustrate' }),
    style: {
      top: '61px',
      right: '67px',
      width: '110px',
      height: '110px',
      background:
        'url(https://mdn.alipayobjects.com/huamei_p63okt/afts/img/MgOtSK07LH8AAAAAAAAAAAAADh8WAQFr/original) 0 0 / 100% 100%',
    },
    className: 'telecommunications',
  },
  {
    field: intl.formatMessage({ id: 'home.case3.title' }),
    scene: intl.formatMessage({ id: 'home.case3.desc' }),
    illustrate: intl.formatMessage({ id: 'home.case3.illustrate' }),
    style: {
      top: '239px',
      left: '223px',
      width: '110px',
      height: '110px',
      background:
        'url(https://mdn.alipayobjects.com/huamei_p63okt/afts/img/Z7ucTICP7P8AAAAAAAAAAAAADh8WAQFr/original) 0 0 / 100% 100%',
    },
    className: 'industry',
  },
  {
    field: intl.formatMessage({ id: 'home.case4.title' }),
    scene: intl.formatMessage({ id: 'home.case4.desc' }),
    illustrate: intl.formatMessage({ id: 'home.case4.illustrate' }),
    style: {
      width: '134px',
      height: '135px',
      top: '234px',
      right: 0,
      background:
        'url(https://mdn.alipayobjects.com/huamei_p63okt/afts/img/lvB2T5JgB1oAAAAAAAAAAAAADh8WAQFr/original) 0 0 / 100% 100%',
    },
    className: 'internet',
  },

  {
    field: intl.formatMessage({ id: 'home.case5.title' }),
    scene: intl.formatMessage({ id: 'home.case5.desc' }),
    illustrate: intl.formatMessage({ id: 'home.case5.illustrate' }),
    style: {
      width: '110px',
      height: '110px',
      top: '468px',
      left: '312px',
      background:
        'url(https://mdn.alipayobjects.com/huamei_p63okt/afts/img/L5faRonbxpcAAAAAAAAAAAAADh8WAQFr/original) 0 0 / 100% 100%',
    },
    className: 'Universal',
  },
  {
    field: intl.formatMessage({ id: 'home.case6.title' }),
    scene: '',
    illustrate: intl.formatMessage({ id: 'home.case6.illustrate' }),
    style: {
      width: '110px',
      height: '110px',
      top: '370px',
      right: '214px',
      background:
        'url(https://mdn.alipayobjects.com/huamei_p63okt/afts/img/ziLVQ6zbV1IAAAAAAAAAAAAADh8WAQFr/original) 0 0 / 100% 100%',
    },
    className: 'Artificial',
  },
];

export const getReason = (intl: IntlShape) => [
  {
    title: intl.formatMessage({ id: 'home.reason0' }),
    content: intl.formatMessage({ id: 'home.reason.desc0' }),
    img: 'https://mdn.alipayobjects.com/huamei_p63okt/afts/img/eQ2CSaTW-iIAAAAAAAAAAAAADh8WAQFr/fmt.avif',
    key: 'reason_1',
  },
  {
    title: intl.formatMessage({ id: 'home.reason1' }),
    content: intl.formatMessage({ id: 'home.reason.desc1' }),
    img: 'https://mdn.alipayobjects.com/huamei_p63okt/afts/img/-2fbSYub2sYAAAAAAAAAAAAADh8WAQFr/fmt.avif',
    key: 'reason_2',
  },
  {
    title: intl.formatMessage({ id: 'home.reason2' }),
    content: intl.formatMessage({ id: 'home.reason.desc2' }),
    img: 'https://mdn.alipayobjects.com/huamei_p63okt/afts/img/bmVhRZuDKQUAAAAAAAAAAAAADh8WAQFr/fmt.avif',
    key: 'reason_3',
  },
  {
    title: intl.formatMessage({ id: 'home.reason3' }),
    content: intl.formatMessage({ id: 'home.reason.desc3' }),
    img: 'https://mdn.alipayobjects.com/huamei_p63okt/afts/img/TAGYR5Pj1gMAAAAAAAAAAAAADh8WAQFr/fmt.avif',
    key: 'reason_4',
  },
  {
    title: intl.formatMessage({ id: 'home.reason4' }),
    content: intl.formatMessage({ id: 'home.reason.desc4' }),
    img: 'https://mdn.alipayobjects.com/huamei_p63okt/afts/img/b2ZtTLd4ppoAAAAAAAAAAAAADh8WAQFr/fmt.avif',
    key: 'reason_5',
  },
];
