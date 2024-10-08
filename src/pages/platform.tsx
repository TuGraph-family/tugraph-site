import { Button, Col, Row } from 'antd';
import { useState, useEffect } from 'react';
import { useMedia } from 'react-use';
import { useIntl, useLocation } from 'umi';

import stylesZh from './platform.less';
import stylesEn from './platform_en.less';
import { ApplyForm } from '@/components/ApplyForm';
import { proAdvantDataDb, proAdvantDataPlat } from '@/data/proAdvantData';
import { SubTitle } from '@/components/SubTitle';
import { LayoutTemplate } from '@/components/LayoutTemplate';
import { getSearch, tracertBPos } from '@/util';
import { DEFAULT_LOCAL } from '@/constant';

export default function PlatFormPage() {
  const intl = useIntl();
  const { search } = useLocation();
  const lang = getSearch(search)?.lang || DEFAULT_LOCAL;
  const styles = lang === 'en' || lang === 'en-US' ? stylesEn : stylesZh;
  const { pathname } = useLocation();
  const isPlatform = pathname === '/platform';
  const pageKey = isPlatform ? 'platform' : 'db';
  const advantData = isPlatform
    ? proAdvantDataPlat(intl)
    : proAdvantDataDb(intl);
  const isWide = useMedia('(min-width: 767.99px)', true);
  const [showApplyForm, setShowApplyForm] = useState(false);

  /** TuGraph 一站式图平台、大规模分布式图数据库 */
  useEffect(() => {
    isPlatform ? tracertBPos('b106249') : tracertBPos('b106256');
  }, []);

  const content = (
    <div className={styles.containerWrapper}>
      <SubTitle
        title={intl.formatMessage({ id: `${pageKey}.descTitle` })}
        className={styles.introSubTitle}
      />
      <div className={styles.introWrapper}>
        <div>{intl.formatMessage({ id: `${pageKey}.descText` })}</div>
      </div>
      <div className={styles.ecoWrapper}>
        <SubTitle
          title={intl.formatMessage({ id: `${pageKey}.proAdvant` })}
          className={styles.subTitle}
        />
        <div className="maxContainer">
          <Row className={styles.advantRow}>
            {advantData.map((item, index) => (
              <Col key={index} className={styles.advantCol}>
                <img src={item.img} alt={item.title} />
                <div className={styles.advantTitle}>{item.title}</div>
                <div className={styles.advantDesc}>{item.desc}</div>
              </Col>
            ))}
          </Row>
        </div>
      </div>
      <ApplyForm visible={showApplyForm} setVisible={setShowApplyForm} />
    </div>
  );
  return (
    <LayoutTemplate
      bannerInfo={{
        bgIconUrl: isPlatform
          ? 'https://mdn.alipayobjects.com/huamei_qcdryc/afts/img/A*Le9dRrzyZ6oAAAAAAAAAAAAADgOBAQ/original'
          : 'https://mdn.alipayobjects.com/huamei_qcdryc/afts/img/A*jQuZQJDdVyEAAAAAAAAAAAAADgOBAQ/original',
        slogan: isWide ? (
          <>{intl.formatMessage({ id: `${pageKey}.slog` })}</>
        ) : (
          intl.formatMessage({ id: `${pageKey}.mobileSlog` })
        ),
        description: intl.formatMessage({ id: `${pageKey}.slogdesc` }),
        sloganClassName: isWide
          ? isPlatform
            ? styles.sloganplatTitle
            : styles.slogandbTitle
          : styles.mobileSolg,
        footer: (
          <Button
            className={styles.bannerBtn}
            onClick={() => setShowApplyForm(true)}
            type="primary"
          >
            {intl.formatMessage({ id: 'db.freeTrial' })}
          </Button>
        ),
        mobileImgClassName: isWide ? '' : styles.mobileImgClassName,
        bannerClassName: isWide
          ? pageKey === 'db'
            ? styles.bannerHeigth
            : styles.bannerHeigthPlat
          : '',
      }}
      content={content}
    />
  );
}
