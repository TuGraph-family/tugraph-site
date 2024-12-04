import styles from './index.less';
import { IntlShape } from 'react-intl';
import DownAndCopyItem from '@/pages/new-pages/Download/components/DownAndCopyItem';
import { getDownList } from '@/pages/new-pages/Download/constants/data';

const DownLoadList = ({ intl }: { intl: IntlShape }) => {
  return (
    <div className={styles.downloadList}>
      {getDownList(intl).map((item) => {
        return (
          <div className={styles.downloadItem} key={item.title}>
            <div className={styles.title}>{item.title}</div>
            <div className={styles.typeList}>
              {item.typeList.map((typeItem) => {
                return (
                  <div className={styles.typeItem} key={typeItem.name}>
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
