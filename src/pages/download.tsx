import React, { useState } from 'react';
import { Button, Col, Row, Select } from 'antd';
import { ApplyForm } from '@/components/ApplyForm';
import { useIntl } from 'umi';
import { useMedia } from 'react-use';
import { LayoutTemplate } from '@/components/LayoutTemplate';
import { assetsList, docsList } from '@/data/download';
import styles from './download.less';

export default function DownloadPage() {
  const intl = useIntl();
  const isWide = useMedia('(min-width: 767.99px)', true);
  const initActiveAssetsVersion = assetsList?.map(
    (item) => item.assets[0].value,
  );
  const [activeVersions, setActiveVersions] = useState(initActiveAssetsVersion);
  const [showApplyForm, setShowApplyForm] = useState(false);

  const content = (
    <div className={styles.containerWrapper}>
      <div className={styles.title}>
        {intl.formatMessage({ id: 'download.title0' })}
      </div>
      {assetsList?.map((item, key) => (
        <Row className={styles.list} key={key}>
          <Col span={isWide ? 16 : 20} className={styles.listName}>
            {item.name}
          </Col>
          <Col className={styles.right} span={isWide ? 4 : 4}>
            <Select
              className={styles.listVersions}
              onChange={(value) => {
                activeVersions[key] = value;
                const newActiveVersions = [...activeVersions];
                setActiveVersions(newActiveVersions);
              }}
              value={activeVersions[key]}
              bordered={false}
              options={item.assets}
            />
          </Col>

          <Col className={styles.right} span={isWide ? 4 : 24}>
            <Button
              onClick={() => {
                window.location.href = activeVersions[key];
              }}
              block
            >
              {intl.formatMessage({ id: 'download.downloadBtn' })}
            </Button>
          </Col>
        </Row>
      ))}

      <div className={styles.title}>
        {intl.formatMessage({ id: 'download.title1' })}
      </div>

      {docsList?.map((item, key) => (
        <Row className={styles.list} key={key}>
          <Col span={isWide ? 16 : 20} className={styles.listName}>
            {item.name}
          </Col>
          <Col className={styles.right} span={isWide ? 4 : 4}>
            <Select
              className={styles.listVersions}
              value={item.assets[0].value}
              bordered={false}
              options={item.assets}
            />
          </Col>

          <Col className={styles.right} span={isWide ? 4 : 24}>
            <Button
              onClick={() => {
                window.location.href = item.assets[0].value;
              }}
              block
            >
              {intl.formatMessage({ id: 'download.downloadBtn' })}
            </Button>
          </Col>
        </Row>
      ))}

      <div className={styles.title}>
        {intl.formatMessage({ id: 'download.title2' })}
      </div>
      <Row className={styles.list}>
        <Col span={isWide ? 20 : 20} className={styles.listName}>
          {intl.formatMessage({ id: 'download.applyText' })}
        </Col>
        <Col className={styles.right} span={isWide ? 4 : 24}>
          <Button
            onClick={() => {
              setShowApplyForm(true);
            }}
            block
          >
            {intl.formatMessage({ id: 'download.contactBtn' })}
          </Button>
        </Col>
      </Row>
      <ApplyForm visible={showApplyForm} setVisible={setShowApplyForm} />
    </div>
  );

  return (
    <LayoutTemplate
      bannerInfo={{
        bgIconUrl:
          'https://mdn.alipayobjects.com/mdn/huamei_qcdryc/afts/img/A*QaKQRqje18MAAAAAAAAAAAAADgOBAQ',
        slogan: intl.formatMessage({ id: 'download.banner.slogan' }),
        description: intl.formatMessage({ id: 'download.banner.description' }),
      }}
      content={content}
    />
  );
}
