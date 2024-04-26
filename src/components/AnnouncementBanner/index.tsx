import { Button, Carousel, Drawer, Modal, Tooltip } from 'antd';
import React, { useEffect, useState } from 'react';
import { useMedia } from 'react-use';
import { getLocale, history, useIntl } from 'umi';

// eslint-disable-next-line import/no-extraneous-dependencies
import { CloseOutlined, LeftOutlined, RightOutlined } from '@ant-design/icons';
import styles from './index.less';
import {
  getBannerCnContentList,
  getBannerEnContentList,
} from '@/data/bannerContent';
const AnnouncementBanner = () => {
  const [showBottomDrawer, setShowBottomDrawer] = useState(false);
  const [showBottomModal, setShowBottomModal] = useState(true);
  const isWide = useMedia('(min-width: 767.99px)', true);
  const intl = useIntl();
  const lang = getLocale();
  const getBannerContentList =
    lang === 'zh-CN' ? getBannerCnContentList : getBannerEnContentList;
  useEffect(() => {
    if (sessionStorage.getItem('isBannerShow')) {
      setShowBottomDrawer(false);
      setShowBottomModal(false);
    } else {
      setShowBottomDrawer(true);
      setShowBottomModal(true);
    }
    setShowBottomModal(true);
    setShowBottomDrawer(true);
  }, []);

  const onOpenBanner = () => {
    setShowBottomModal(true);
  };
  const PCBanner = () => {
    return (
      <div>
        {getBannerContentList(intl).length > 0 ? (
          <>
            <Tooltip
              title={intl.formatMessage({ id: 'home.banner.expandBtnDesc' })}
              color="#FFFFFF"
              placement="left"
            >
              <div
                className={styles.expandBtn}
                onClick={() => {
                  setShowBottomDrawer(true);
                }}
              >
                <img
                  src="https://mdn.alipayobjects.com/huamei_qcdryc/afts/img/A*WjEsS552EJAAAAAAAAAAAAAADgOBAQ/original"
                  alt=""
                />
              </div>
            </Tooltip>

            <Drawer
              placement="right"
              open={showBottomDrawer}
              mask={false}
              height="192"
              closable={false}
              className={styles.bottomDrawer}
            >
              <div className={styles.closeOutlinedBtn}>
                <CloseOutlined
                  onClick={() => {
                    setShowBottomDrawer(false);
                    sessionStorage.setItem('isBannerShow', 'false');
                  }}
                />
              </div>
              {getBannerContentList(intl).length > 1 && (
                <>
                  <div className={styles.leftOutlinedBtn}>
                    <LeftOutlined />
                  </div>
                  <div className={styles.rightOutlinedBtn}>
                    <RightOutlined />
                  </div>
                </>
              )}
              <Carousel>
                {getBannerContentList(intl)?.length
                  ? getBannerContentList(intl).map((item, index) => (
                      <div key={index} className={styles.bannerContainer}>
                        <img
                          src={item.pcImg}
                          onClick={() => {
                            setShowBottomDrawer(false);
                            sessionStorage.setItem('isBannerShow', 'false');
                            history.push(
                              `/blog?id=${lang === 'zh-CN' ? '1000' : '1000'}`,
                            );
                          }}
                        />
                      </div>
                    ))
                  : null}
              </Carousel>
            </Drawer>
          </>
        ) : null}
      </div>
    );
  };

  const mobileBanner = getBannerContentList(intl).length > 0 && (
    <>
      <img
        src="https://mdn.alipayobjects.com/huamei_qcdryc/afts/img/A*E6rZRLlvvDoAAAAAAAAAAAAADgOBAQ/original"
        className={styles.announcementIcon}
        onClick={() => {
          onOpenBanner();
        }}
      />

      <Modal
        className={styles.bannerModal}
        open={showBottomModal}
        closable={false}
        footer={null}
      >
        <Carousel>
          {getBannerContentList(intl).map((item, index) => (
            <div key={index} className={styles.mobileContainer}>
              <img
                src={item.mobileImg}
                onClick={() => {
                  history.push(`/blog?id=${lang === 'zh-CN' ? '15' : '11'}`);
                  setShowBottomModal(false);
                  sessionStorage.setItem('isBannerShow', 'false');
                }}
              />
            </div>
          ))}
        </Carousel>
        <CloseOutlined
          className={styles.mobileCloseIcon}
          onClick={() => {
            setShowBottomModal(false);
            sessionStorage.setItem('isBannerShow', 'false');
          }}
        />
      </Modal>
    </>
  );
  return isWide ? <PCBanner /> : mobileBanner;
};
export default AnnouncementBanner;
