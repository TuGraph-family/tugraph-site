import { IntlShape } from 'react-intl';

export const getPartnerReason = (intl: IntlShape) => [
  {
    src: 'https://mdn.alipayobjects.com/huamei_p63okt/afts/img/rvcCSZzirKAAAAAAAAAAAAAADh8WAQFr/original',
    span: 12,
    support: intl.formatMessage({ id: 'ecosystem.support0' }),
  },
  {
    src: 'https://mdn.alipayobjects.com/huamei_p63okt/afts/img/-ohBRKMEHoMAAAAAAAAAAAAADh8WAQFr/original',
    span: 12,
    support: intl.formatMessage({ id: 'ecosystem.support1' }),
  },
  {
    src: 'https://mdn.alipayobjects.com/huamei_p63okt/afts/img/6wwcSZRVakoAAAAAAAAAAAAADh8WAQFr/original',
    span: 12,
    support: intl.formatMessage({ id: 'ecosystem.support2' }),
  },
  {
    src: 'https://mdn.alipayobjects.com/huamei_p63okt/afts/img/wkzBTJ3fnhwAAAAAAAAAAAAADh8WAQFr/original',
    span: 12,
    support: intl.formatMessage({ id: 'ecosystem.support3' }),
  },
];
