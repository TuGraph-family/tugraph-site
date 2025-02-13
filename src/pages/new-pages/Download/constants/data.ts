import { IntlShape } from 'react-intl';
export const getDownList = (intl: IntlShape) => [
  {
    title: 'TuGraph DB',
    typeList: [
      {
        name: 'CentOS',
        assets: [
          {
            label: 'v4.3.2',
            value:
              'https://tugraph-web.oss-cn-beijing.aliyuncs.com/tugraph/tugraph-4.3.2/tugraph-4.3.2-1.el8.x86_64.rpm',
          },
          {
            label: 'v4.0.1',
            value:
              'https://tugraph-web.oss-cn-beijing.aliyuncs.com/tugraph/tugraph-4.0.1/tugraph-4.0.1-1.el7.x86_64.rpm',
          },
          {
            label: 'v4.0.0',
            value:
              'https://tugraph-web.oss-cn-beijing.aliyuncs.com/tugraph/tugraph-4.0.0/tugraph-4.0.0-1.el7.x86_64.rpm',
          },
          {
            label: 'v3.6.0',
            value:
              'https://tugraph-web.oss-cn-beijing.aliyuncs.com/tugraph/tugraph-3.6.0/tugraph-3.6.0-1.el7.x86_64.rpm',
          },
        ],
      },
      {
        name: 'Ubuntu',
        assets: [
          {
            label: 'v4.3.2',
            value:
              'https://tugraph-web.oss-cn-beijing.aliyuncs.com/tugraph/tugraph-4.3.2/tugraph-4.3.2-1.x86_64.deb',
          },
          {
            label: 'v4.0.1',
            value:
              'https://tugraph-web.oss-cn-beijing.aliyuncs.com/tugraph/tugraph-4.0.1/tugraph-4.0.1-1.x86_64.deb',
          },
          {
            label: 'v4.0.0',
            value:
              'https://tugraph-web.oss-cn-beijing.aliyuncs.com/tugraph/tugraph-4.0.0/tugraph-4.0.0-1.x86_64.deb',
          },
          {
            label: 'v3.6.0',
            value:
              'https://tugraph-web.oss-cn-beijing.aliyuncs.com/tugraph/tugraph-3.6.0/tugraph-3.6.0-1.x86_64.deb',
          },
        ],
      },
    ],
    versionDesc: intl.formatMessage({
      id: 'download.version.desc1',
    }),
  },
  {
    title: 'TuGraph Analytics',
    typeList: [
      {
        name: intl.formatMessage({
          id: 'download.imageDownloadAddress',
        }),
        content: 'https://hub.docker.com/r/tugraph/geaflow-console',
      },
      {
        name: intl.formatMessage({
          id: 'download.imageDownloadMethod',
        }),
        content: 'docker pull tugraph/geaflow-console',
      },
    ],
    versionDesc: intl.formatMessage({
      id: 'download.version.desc2',
    }),
  },
  {
    title: 'TuGraph Learn',
    typeList: [
      {
        name: intl.formatMessage({
          id: 'download.imageDownloadAddress',
        }),
        content: 'https://hub.docker.com/r/tugraph/geaflow-console',
      },
      {
        name: intl.formatMessage({
          id: 'download.imageDownloadMethod',
        }),
        content: 'docker pull tugraph/geaflow-console',
      },
    ],
    versionDesc: intl.formatMessage({
      id: 'download.version.desc3',
    }),
  },
];
