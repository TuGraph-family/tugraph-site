import styles from './index.less';
import FadeInSection from '@/components/FadeInSection';
import MainButton from '@/components/MainButton';
import { SubTitle } from '@/components/SubTitle';
import Tag from '@/components/Tag';
import { IntlShape } from 'react-intl';

const Version = ({ intl }: { intl: IntlShape }) => {
  const VERSION_LIST = [
    {
      key: 'comunity',
      versionName: intl.formatMessage({ id: 'home.version.title1' }),
      versionType: intl.formatMessage({ id: 'home.version.community.desc5' }),
      descList: [
        intl.formatMessage({ id: 'home.version.community.desc1' }),
        intl.formatMessage({ id: 'home.version.community.desc2' }),
        intl.formatMessage({ id: 'home.version.community.desc3' }),
        intl.formatMessage({ id: 'home.version.community.desc4' }),
      ],
      btn: (
        <MainButton
          type="real"
          isMotion={false}
          isAnimation={false}
          btnText={intl.formatMessage({ id: 'home.version.community.btn' })}
          style={{ width: '100%' }}
        />
      ),
    },
    {
      key: 'enterprise',
      versionName: intl.formatMessage({ id: 'home.version.title2' }),
      versionType: intl.formatMessage({ id: 'home.version.enterprise.desc5' }),
      descList: [
        intl.formatMessage({ id: 'home.version.enterprise.desc1' }),
        intl.formatMessage({ id: 'home.version.enterprise.desc2' }),
        intl.formatMessage({ id: 'home.version.enterprise.desc3' }),
        intl.formatMessage({ id: 'home.version.enterprise.desc4' }),
      ],
      btn: (
        <MainButton
          type="illusory"
          style={{ width: '100%' }}
          btnText={intl.formatMessage({ id: 'home.version.enterprise.btn' })}
          isMotion={false}
        />
      ),
    },
  ];

  return (
    <div className={styles.versionContainer}>
      <SubTitle title={intl.formatMessage({ id: 'home.chooseVersion' })} />

      <div className={styles.versionListWrapper}>
        {VERSION_LIST.map((item) => (
          <FadeInSection key={item.key}>
            <div className={styles.editionWrapper}>
              <span className={styles.title}>{item.versionName}</span>
              <div className={styles.tag}>
                <Tag text={item.versionType} />
              </div>
              {item.descList.map((descItem) => (
                <div
                  key={descItem}
                  className={styles.recommendationPointWrapper}
                >
                  {descItem}
                </div>
              ))}
              <div className={styles.btn}>{item.btn}</div>
            </div>
          </FadeInSection>
        ))}
      </div>
    </div>
  );
};

export default Version;
