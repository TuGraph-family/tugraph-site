import React, { useState } from 'react';
import { Button, Col, message, Row, Select } from 'antd';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { useIntl } from 'umi';
import { useMedia } from 'react-use';
import styles from './download.less';
import { ApplyForm } from '@/components/ApplyForm';
import { LayoutTemplate } from '@/components/LayoutTemplate';
import { assetsList, docsList, iconMap } from '@/data/download';
import { DownloadItem } from '@/interface';

export default function DownloadPage() {
  const intl = useIntl();
  const isWide = useMedia('(min-width: 767.99px)', true);

  const [showApplyForm, setShowApplyForm] = useState(false);

  const DownloadGroupItem = ({ name, action, version }: DownloadItem) => {
    const [key, setKey] = useState<any>(version?.list[0]?.value);
    const [isHover, setIsHover] = useState(false);

    const webItem = (
      <div className={styles.downloadGroupItem}>
        <div className={styles.downloadGroupItemInfo}>
          <div className={styles.downloadGroupItemName}>{name}</div>
          {version && version?.list?.length ? (
            <div className={styles.downloadGroupItemVerison}>
              <Select
                value={key}
                className={styles.downloadGroupItemVerisonSelect}
                onChange={(value) => {
                  setKey(value);
                }}
                bordered={false}
              >
                {version.list.map((item: any) => (
                  <Select.Option key={item?.value}>{item?.label}</Select.Option>
                ))}
              </Select>
            </div>
          ) : null}
        </div>
        <div className={styles.downloadGroupItemAction}>
          <Button
            onMouseOver={() => {
              setIsHover(true);
            }}
            onMouseOut={() => {
              setIsHover(false);
            }}
            className={styles.downloadGroupItemActionButton}
            onClick={() => {
              if (action?.onAction) {
                action?.onAction(key);
              }
            }}
          >
            {action?.icon && (
              <img
                src={
                  isHover
                    ? `${iconMap[action?.icon || 'download']}`
                    : iconMap[
                        `${'normal_' + action?.icon || 'normal_download'}`
                      ]
                }
                className={styles.downloadGroupItemActionButtonIcon}
                alt=""
              />
            )}
            {action?.text}
          </Button>
        </div>
      </div>
    );

    const pmdItem = (
      <div className={styles.pmdDownloadGroupItem}>
        <div className={styles.top}>
          <div className={styles.name}>{name}</div>
          <div className={styles.verison}>
            {version && (
              <div className={styles.selectWrap}>
                <Select
                  value={key}
                  className={styles.select}
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
        </div>
        <div className={styles.bottom}>
          <Button
            onMouseOver={() => {
              setIsHover(true);
            }}
            onMouseOut={() => {
              setIsHover(false);
            }}
            className={styles.button}
            onClick={() => {
              if (action?.onAction) {
                action?.onAction(key);
              }
            }}
          >
            {action?.icon && (
              <img
                src={
                  isHover
                    ? `${iconMap[action?.icon || 'download']}`
                    : iconMap[
                        `${'normal_' + action?.icon || 'normal_download'}`
                      ]
                }
                className={styles.downloadGroupItemActionButtonIcon}
                alt=""
              />
            )}
            {action?.text}
          </Button>
        </div>
      </div>
    );

    return <Col span={isWide ? 12 : 24}> {isWide ? webItem : pmdItem}</Col>;
  };

  const DownloadGroupCopyItem = ({
    title,
    link,
  }: {
    title: string;
    link: string;
  }) => {
    const [isHover, setIsHover] = useState(false);

    const webItem = (
      <div className={styles.downloadGroupCopyItem}>
        <div className={styles.downloadGroupCopyItemTitle}>{title}</div>
        <div className={styles.downloadGroupCopyItemText}>
          <div className={styles.downloadGroupCopyItemLink}>{link}</div>
          <div
            className={styles.downloadGroupCopyItemButton}
            onMouseOver={() => {
              setIsHover(true);
            }}
            onMouseOut={() => {
              setIsHover(false);
            }}
          >
            <img
              src={isHover ? `${iconMap.copy}` : iconMap.normal_copy}
              alt=""
              className={styles.downloadGroupCopyItemButtonIcon}
            />
            <CopyToClipboard
              text={link}
              onCopy={() => {
                message.success(
                  intl.formatMessage({ id: 'download.copySuccess' }),
                );
              }}
            >
              <span className={styles.downloadGroupCopyItemButtonText}>
                {intl.formatMessage({ id: 'download.copyLinkBtn' })}
              </span>
            </CopyToClipboard>
          </div>
        </div>
      </div>
    );

    const pmdItem = (
      <div className={styles.pwdDownloadGroupCopyItem}>
        <div className={styles.top}>{title}</div>
        <div className={styles.middle}>{link}</div>
        <div className={styles.bottom}>
          <CopyToClipboard
            text={link}
            onCopy={() => {
              message.success(
                intl.formatMessage({ id: 'download.copySuccess' }),
              );
            }}
          >
            <span className={styles.buttonText}>
              {intl.formatMessage({ id: 'download.copyLinkBtn' })}
            </span>
          </CopyToClipboard>
        </div>
      </div>
    );

    return <Col span={isWide ? 12 : 24}>{isWide ? webItem : pmdItem}</Col>;
  };

  const DownloadGroup = ({
    title = 'TuGraph DB',
    subTitle = 'TuGraph社区版下载',
    items = null,
  }: DownloadItem) => {
    return (
      <div
        className={styles.downloadGroup}
        style={{
          padding: isWide ? '0' : '0 24px',
        }}
      >
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
    <div
      className={styles.containerWrapper}
      style={{
        padding: isWide ? '0' : 'padding: 0 32px 16px 32px;',
      }}
    >
      <DownloadGroup
        title="TuGraph DB"
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
      {/* <DownloadGroup
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
      /> */}
      <DownloadGroup
        title="TuGraph Analytics"
        subTitle={intl.formatMessage({ id: 'download.title3' })}
        items={
          <>
            <DownloadGroupCopyItem
              title={intl.formatMessage({
                id: 'download.imageDownloadAddress',
              })}
              link="https://hub.docker.com/r/tugraph/geaflow-console"
            />
            <DownloadGroupCopyItem
              title={intl.formatMessage({
                id: 'download.imageDownloadMethod',
              })}
              link="docker pull tugraph/geaflow-console"
            />
          </>
        }
      />
      <DownloadGroup
        title="TuGraph Learn"
        subTitle={intl.formatMessage({ id: 'download.title4' })}
        items={
          <>
            <DownloadGroupCopyItem
              title={intl.formatMessage({
                id: 'download.imageDownloadAddress',
              })}
              link="https://hub.docker.com/r/tugraph/tugraph-compile-centos7"
            />
            <DownloadGroupCopyItem
              title={intl.formatMessage({
                id: 'download.imageDownloadMethod',
              })}
              link="docker pull tugraph/tugraph-compile-centos7"
            />
          </>
        }
      />
      <ApplyForm visible={showApplyForm} setVisible={setShowApplyForm} />
    </div>
  );

  return (
    <LayoutTemplate
      bannerInfo={{
        bgIconUrl:
          'https://mdn.alipayobjects.com/mdn/huamei_qcdryc/afts/img/A*QaKQRqje18MAAAAAAAAAAAAADgOBAQ',
        slogan: intl.formatMessage({ id: 'download.banner.slogan' }),
        description: '',
      }}
      content={content}
    />
  );
}
