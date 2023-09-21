import React, { useState } from 'react';
import { Button, Col, Row, Select } from 'antd';
import { useIntl } from 'umi';
import { useMedia } from 'react-use';
import styles from './download.less';
import { ApplyForm } from '@/components/ApplyForm';
import { LayoutTemplate } from '@/components/LayoutTemplate';
import { assetsList, docsList } from '@/data/download';
import { DownloadItem } from '@/interface';

export default function DownloadPage() {
  const intl = useIntl();
  const isWide = useMedia('(min-width: 767.99px)', true);

  const [showApplyForm, setShowApplyForm] = useState(false);

  const DownloadGroupItem = ({ name, action, version }: DownloadItem) => {
    const [key, setKey] = useState<any>(version?.list[0]?.value);
    const iconMap = {
      download:
        'https://mdn.alipayobjects.com/huamei_qcdryc/afts/img/A*2jWPR6patl8AAAAAAAAAAAAADgOBAQ/original',
      copy: 'https://mdn.alipayobjects.com/huamei_qcdryc/afts/img/A*XqfDRpBwxgYAAAAAAAAAAAAADgOBAQ/original',
    };
    return (
      <Col span={isWide ? 12 : 24}>
        <div className={styles.downloadGroupItem}>
          <div className={styles.downloadGroupItemInfo}>
            <div className={styles.downloadGroupItemName}>{name}</div>
            {version && (
              <div className={styles.downloadGroupItemVersion}>
                <Select
                  value={key}
                  className={styles.downloadGroupItemVersionSelect}
                  onChange={(value) => {
                    setKey(value);
                  }}
                  bordered={false}
                >
                  {version.list.map((item: any) => (
                    <Select.Option key={item?.value}>
                      {item?.label}
                    </Select.Option>
                  ))}
                </Select>
              </div>
            )}
          </div>
          <div className={styles.downloadGroupItemAction}>
            <Button
              className={styles.downloadGroupItemActionButton}
              onClick={() => {
                action?.onAction(key);
              }}
            >
              {action?.icon && (
                <img
                  src={`${iconMap[action?.icon || 'download']}`}
                  className={styles.downloadGroupItemActionButtonIcon}
                  alt=""
                />
              )}
              {action?.text}
            </Button>
          </div>
        </div>
      </Col>
    );
  };

  const DownloadGroup = ({
    title = 'TuGraph-DB',
    subTitle = 'TuGraph社区版下载',
    items = null,
  }: DownloadItem) => {
    return (
      <div className={styles.downloadGroup}>
        {title && (
          <Row>
            <Col span={24} className={styles.downloadGroupTitle}>
              {title}
            </Col>
          </Row>
        )}
        <Row>
          <Col span={24} className={styles.downloadGroupSubTitle}>
            {subTitle}
          </Col>
        </Row>
        <Row gutter={[24, { xs: 8, sm: 16, md: 24, lg: 32 }]}>{items}</Row>
      </div>
    );
  };

  const content = (
    <div className={styles.containerWrapper}>
      <DownloadGroup
        title="TuGraph-DB"
        subTitle={intl.formatMessage({ id: 'download.title0' })}
        items={
          <>
            {assetsList.map((item) => {
              return (
                <DownloadGroupItem
                  key={item?.name}
                  name={item?.name}
                  version={{
                    list: item?.assets,
                  }}
                  action={{
                    text: intl.formatMessage({ id: 'download.downloadBtn' }),
                    icon: 'download',
                    onAction: (key: any) => {
                      window.location.href = key;
                    },
                  }}
                />
              );
            })}
          </>
        }
      />
      <DownloadGroup
        title=""
        subTitle={intl.formatMessage({ id: 'download.title2' })}
        items={
          <>
            <DownloadGroupItem
              name={intl.formatMessage({ id: 'download.applyText' })}
              action={{
                text: intl.formatMessage({ id: 'download.contactBtn' }),
                onAction: () => {
                  setShowApplyForm(true);
                },
              }}
            />
          </>
        }
      />
      <DownloadGroup
        title=""
        subTitle={intl.formatMessage({ id: 'download.title1' })}
        items={
          <>
            {docsList.map((item) => {
              return (
                <DownloadGroupItem
                  key={item?.name}
                  name={item?.name}
                  version={{
                    list: item?.assets,
                  }}
                  action={{
                    text: intl.formatMessage({ id: 'download.downloadBtn' }),
                    icon: 'download',
                    onAction: (key: any) => {
                      window.location.href = key;
                    },
                  }}
                />
              );
            })}
          </>
        }
      />
      {/* {assetsList?.map((item, key) => (
        <Row className={styles.list} key={key}>
          <Col span={16} className={styles.listName}>
            {item.name}
          </Col>
          <Col className={styles.right} span={isWide ? 4 : 8}>
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
      ))} */}

      <div className={styles.title}>
        {intl.formatMessage({ id: 'download.title1' })}
      </div>

      {/* {docsList?.map((item, key) => (
        <Row className={styles.list} key={key}>
          <Col span={16} className={styles.listName}>
            {item.name}
          </Col>
          <Col className={styles.right} span={isWide ? 4 : 8}>
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
      ))} */}

      <div className={styles.title}>
        {intl.formatMessage({ id: 'download.title2' })}
      </div>
      {/* <Row className={styles.list}>
        <Col span={20} className={styles.listName}>
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
      </Row> */}
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
