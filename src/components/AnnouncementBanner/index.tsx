import React, {
  useState,
  useEffect,
  forwardRef,
  useImperativeHandle,
} from 'react';
import { Button, Carousel, Drawer, Modal, Tooltip } from 'antd';
import { getLocale } from 'umi';
import {
  LeftOutlined,
  RightOutlined,
  CloseOutlined,
  DoubleLeftOutlined,
  ArrowRightOutlined,
} from '@ant-design/icons';
import { useMedia } from 'react-use';
import { useIntl } from 'umi';
import styles from './index.less';
import { getBannerContentList } from '@/data/bannerContent';
const AnnouncementBanner = forwardRef((_prop, ref) => {
  const [showBottomDrawer, setShowBottomDrawer] = useState(false);
  const [showBottomModal, setShowBottomModal] = useState(true);
  const isWide = useMedia('(min-width: 767.99px)', true);
  const intl = useIntl();
  const lang = getLocale();
  useEffect(() => {
    if (sessionStorage.getItem('isBannerShow')) {
      setShowBottomDrawer(false);
      setShowBottomModal(false);
    } else {
      setShowBottomDrawer(true);
      setShowBottomModal(true);
    }
  }, []);
  useImperativeHandle(ref, () => ({
    onOpenBanner: onOpenBanner,
  }));
  const onOpenBanner = () => {
    setShowBottomModal(true);
  };
  const pcBanner = lang === 'zh-CN' && (
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
          {getBannerContentList(intl).map((i) => (
            <div key={i.title} className={styles.pcBannerContent}>
              <div>
                <div className={styles.pcBannerLogo}>
                  <img src={i.logo} />
                </div>
                <div className={styles.descriptionStyle}>
                  <span className={styles.description}>{i.description}</span>
                  <span className={styles.title}>{i.title}</span>
                  <Button type="primary" ghost className={styles.btn}>
                    {i.btnText}
                    <ArrowRightOutlined />
                  </Button>
                </div>
                <div className={styles.description1}>
                  <div className={styles.circle} />
                  <span> {i.description1}</span>
                </div>
                <div className={styles.description1}>
                  <div className={styles.circle} />
                  <span> {i.description2}</span>
                </div>
                <div className={styles.description1}>
                  <div className={styles.circle} />
                  <span> {i.description3}</span>
                  <img src="https://mdn.alipayobjects.com/huamei_qcdryc/afts/img/A*bXasQ6Phx6UAAAAAAAAAAAAADgOBAQ/original" />
                </div>
                <div>
                  <div className={styles.time}>{i.registrationTime}</div>
                  <span className={styles.description4}>{i.description4}</span>
                </div>
              </div>
              <div className={styles.weChatContainer}>
                <img src="https://mdn.alipayobjects.com/huamei_qcdryc/afts/img/A*NEdRS6t1UJUAAAAAAAAAAAAADgOBAQ/original" />
                <div>{i.weChat}</div>
                <div>{i.weChatDesc}</div>
              </div>
            </div>
          ))}
        </Carousel>
      </Drawer>
    </>
  );
  const mobileBanner = lang === 'zh-CN' && (
    <Modal
      className={styles.bannerModal}
      open={showBottomModal}
      closable={false}
      footer={null}
    >
      <Carousel>
        {getBannerContentList(intl).map((i) => (
          <div className={styles.mobileModalContainer} key={i.mobileTitle}>
            <div className={styles.mobileBannerLogo}>
              <img src={i.logo} />
            </div>
            <div className={styles.mobileDescription}>{i.description}</div>
            <div className={styles.mobileTitle}>{i.mobileTitle}</div>
            <div className={styles.mobileTime}>{i.registrationTime}</div>
            <div className={styles.mobileDescription1}> {i.description1}</div>
            <div className={styles.mobileDescription1}> {i.description2}</div>
            <div className={styles.mobileDescription1}> {i.description3}</div>
            <div>
              <Button className={styles.mobileBtn} type="primary">
                {i.btnText}
              </Button>
            </div>
            <div className={styles.mobileDescription4}>{i.description4}</div>
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
  );
  return isWide ? pcBanner : mobileBanner;
});
export default AnnouncementBanner;
