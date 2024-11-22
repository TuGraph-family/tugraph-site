import styles from './index.less';
import { IntlShape } from 'react-intl';
import { assetsList } from '@/data/download';
import DownAndCopyItem from '@/pages/new-pages/Download/components/DownAndCopyItem';

const DownLoadList = ({ intl }: { intl: IntlShape }) => {
  const downlist = [
    {
      title: 'TuGraph DB',
      typeList: assetsList,
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
                  <div className={styles.typeItem}>
                    <div
                      className={typeItem?.assets ? styles.typeItemFlex : ''}
                    >
                      <div className={styles.typeItemTitle}>
                        {typeItem.name}
                      </div>

                      {typeItem?.assets ? (
                        <DownAndCopyItem
                          type="down"
                          intl={intl}
                          options={typeItem.assets}
                        />
                      ) : (
                        <DownAndCopyItem
                          type="copy"
                          intl={intl}
                          link={typeItem?.content}
                        />
                      )}
                    </div>
                    <div className={styles.fileDesc}>
                      这是该内容的简短说明，这是该内容的简短说明，文本在两行以内，这是该内容的简短说明，这是该内容的简短说明，文本在两行以内
                    </div>
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
