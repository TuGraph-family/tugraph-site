import CopyToClipboard from 'react-copy-to-clipboard';
import styles from './index.less';
import { Select } from 'antd';
import { DownloadOutlined, CopyOutlined } from '@ant-design/icons';
import cx from 'classnames';

const DownLoadList = () => {
  const downlist = [
    {
      title: 'TuGraph DB',
      typeList: [
        {
          type: 'CentOS',
          options: [
            {
              label: 'v4.0.0',
              value: 'v4.0.0',
            },
            {
              label: 'v4.0.1',
              value: 'v4.0.1',
            },
            {
              label: 'v4.0.2',
              value: 'v4.0.2',
            },
          ],
        },
        {
          type: 'Ubuntu',
          options: [
            {
              label: 'v4.0.0',
              value: 'v4.0.0',
            },
            {
              label: 'v4.0.1',
              value: 'v4.0.1',
            },
            {
              label: 'v4.0.2',
              value: 'v4.0.2',
            },
          ],
        },
      ],
    },
    {
      title: 'TuGraph Analytics',
      typeList: [
        {
          type: '镜像下载地址',
          content: 'https://hub.docker.com/r/tugraph/geaflow-console',
        },
        {
          type: '下载方式/命令',
          content: 'docker pull tugraph/geaflow-console',
        },
      ],
    },
    {
      title: 'TuGraph Learn',
      typeList: [
        {
          type: '镜像下载地址',
          content: 'https://hub.docker.com/r/tugraph/geaflow-console',
        },
        {
          type: '下载方式/命令',
          content: 'docker pull tugraph/geaflow-console',
        },
      ],
    },
  ];

  return (
    <div className={styles.downloadList}>
      {downlist.map((item) => {
        return (
          <div className={styles.downloadItem}>
            <div className={styles.title}>{item.title}</div>
            <div className={styles.typeList}>
              {item.typeList.map((typeItem) => {
                return (
                  <div
                    className={cx(
                      styles.typeItem,
                      typeItem?.options ? styles.typeItemFlex : '',
                    )}
                  >
                    <div className={styles.typeItemTitle}>{typeItem.type}</div>

                    {typeItem?.options ? (
                      <div className={styles.typeItemSelect}>
                        <Select
                          options={typeItem.options}
                          className={styles.select}
                        />
                        <div className={styles.downloadBtn}>
                          <DownloadOutlined />
                          立即下载
                        </div>
                      </div>
                    ) : (
                      <div className={styles.typeItemCopy}>
                        <div>{typeItem?.content}</div>
                        <CopyToClipboard
                          text={typeItem?.content}
                          onCopy={() => {}}
                        >
                          <div className={styles.buttonText}>
                            <CopyOutlined />
                            复制
                          </div>
                        </CopyToClipboard>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default DownLoadList;
