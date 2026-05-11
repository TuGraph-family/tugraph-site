import { IntlShape } from 'react-intl';

export const getPartner = (intl: IntlShape) => [
  {
    title: intl.formatMessage({ id: 'ecosystem.type0.title' }),
    content: intl.formatMessage({ id: 'ecosystem.type0.description' }),
    path: 'M4 3H20C20.5523 3 21 3.44772 21 4V11H3V4C3 3.44772 3.44772 3 4 3ZM3 13H21V20C21 20.5523 20.5523 21 20 21H4C3.44772 21 3 20.5523 3 20V13ZM7 16V18H10V16H7ZM7 6V8H10V6H7Z',
    key: 'partner_1',
  },
  {
    title: intl.formatMessage({ id: 'ecosystem.type1.title' }),
    content: intl.formatMessage({ id: 'ecosystem.type1.description' }),
    path: 'M19 6H11C10.4477 6 10 6.44772 10 7V20H4C3.44772 20 3 19.5523 3 19V3C3 2.44772 3.44772 2 4 2H18C18.5523 2 19 2.44772 19 3V6ZM13 8H21C21.5523 8 22 8.44772 22 9V21C22 21.5523 21.5523 22 21 22H13C12.4477 22 12 21.5523 12 21V9C12 8.44772 12.4477 8 13 8Z',
    key: 'partner_2',
  },
  {
    title: intl.formatMessage({ id: 'ecosystem.type2.title' }),
    content: intl.formatMessage({ id: 'ecosystem.type2.description' }),
    path: 'M8.58579 17H3V15H21V17H15.4142L18.6569 20.2426L17.2426 21.6569L13 17.4142V20H11V17.4142L6.75736 21.6569L5.34315 20.2426L8.58579 17ZM5 3H19C19.5523 3 20 3.44772 20 4V14H4V4C4 3.44772 4.44772 3 5 3Z',
    key: 'partner_3',
  },
  {
    title: intl.formatMessage({ id: 'ecosystem.type3.title' }),
    content: intl.formatMessage({ id: 'ecosystem.type3.description' }),
    path: 'M5 2H15L19.7071 6.70711C19.8946 6.89464 20 7.149 20 7.41421V21C20 21.5523 19.5523 22 19 22H5C4.44772 22 4 21.5523 4 21V3C4 2.44772 4.44772 2 5 2ZM13 18V10H8V12H11V18H13ZM8 13V15H10V13H8ZM14 13V15H16V13H14ZM14 10V12H16V10H14ZM8 16V18H10V16H8ZM14 16V18H16V16H14Z',
    key: 'partner_4',
  },
  {
    title: intl.formatMessage({ id: 'ecosystem.type4.title' }),
    content: intl.formatMessage({ id: 'ecosystem.type4.description' }),
    path: 'M12 5V2H10V5H4C3.44772 5 3 5.44772 3 6V14C3 14.5523 3.44772 15 4 15H17.4142L21.7071 10.7071C22.0976 10.3166 22.0976 9.68342 21.7071 9.29289L17.4142 5H12ZM12 17H10V22H12V17Z',
    key: 'partner_5',
  },
];

export const getPartnerReason = (intl: IntlShape) => [
  {
    support: intl.formatMessage({ id: 'ecosystem.support0' }),
    desc: intl.formatMessage({ id: 'ecosystem.desc0' }),
    key: 'partner_reason_1',
  },
  {
    support: intl.formatMessage({ id: 'ecosystem.support1' }),
    desc: intl.formatMessage({ id: 'ecosystem.desc1' }),
    key: 'partner_reason_2',
  },
  {
    support: intl.formatMessage({ id: 'ecosystem.support2' }),
    desc: intl.formatMessage({ id: 'ecosystem.desc2' }),
    key: 'partner_reason_3',
  },
  {
    support: intl.formatMessage({ id: 'ecosystem.support3' }),
    desc: intl.formatMessage({ id: 'ecosystem.desc3' }),
    key: 'partner_reason_4',
  },
];
