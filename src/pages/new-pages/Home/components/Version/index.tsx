import styles from './index.less';
import FadeInSection from '@/components/FadeInSection';
import MainButton from '@/components/MainButton';
import { IntlShape } from 'react-intl';

const Version = ({ intl }: { intl: IntlShape }) => {
  const VERSION_LIST = [
    {
      key: 'comunity',
      versionName: intl.formatMessage({ id: 'home.version.title1' }),
      versionType: intl.formatMessage({ id: 'home.tugrpah.db' }),
      descList: [
        intl.formatMessage({ id: 'home.version.community.desc1' }),
        intl.formatMessage({ id: 'home.version.community.desc2' }),
        intl.formatMessage({ id: 'home.version.community.desc3' }),
        intl.formatMessage({ id: 'home.version.community.desc4' }),
      ],
      btn: (
        <MainButton
          type="experience"
          btnText={intl.formatMessage({ id: 'home.btn.desc' })}
          overlayStyle={{ width: 514 }}
        />
      ),
    },
    {
      key: 'enterprise',
      versionName: intl.formatMessage({ id: 'home.version.title2' }),
      versionType: intl.formatMessage({ id: 'home.distributed' }),
      descList: [
        intl.formatMessage({ id: 'home.version.enterprise.desc1' }),
        intl.formatMessage({ id: 'home.version.enterprise.desc2' }),
        intl.formatMessage({ id: 'home.version.enterprise.desc3' }),
        intl.formatMessage({ id: 'home.version.enterprise.desc4' }),
      ],
      btn: (
        <MainButton
          type="consult"
          style={{ background: '#e1e4e8' }}
          btnText={intl.formatMessage({ id: 'home.btn.tryOut' })}
        />
      ),
    },
  ];

  return (
    <div className={styles.versionContainer}>
      <FadeInSection>
        <div className={styles.versionTitle}>
          {intl.formatMessage({ id: 'home.chooseVersion' })}
        </div>
      </FadeInSection>

      <div className={styles.versionListWrapper}>
        {VERSION_LIST.map((item) => (
          <FadeInSection key={item.key}>
            <div className={styles.editionWrapper}>
              <span className={styles.title}>{item.versionName}</span>
              <span className={styles.tag}>{item.versionType}</span>
              <div className={styles.line} />
              {item.descList.map((descItem) => (
                <div
                  key={descItem}
                  className={styles.recommendationPointWrapper}
                >
                  {descItem}
                </div>
              ))}
              {item.btn}
            </div>
          </FadeInSection>
        ))}
      </div>
    </div>
  );
};

export default Version;
