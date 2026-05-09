import { IntlShape } from 'react-intl';
import MainButton from '@/components/MainButton';
import { getSearch, historyPushLinkAt } from '@/util';
import { history, useLocation } from 'umi';
import { DEFAULT_LOCAL } from '@/constant';
import ProductBanner from '@/components/ProductBanner';
import {
  ArrowRightOutlined,
  DownOutlined,
  FileTextOutlined,
} from '@ant-design/icons';

export interface IBannerProps {
  type: string;
  intl: IntlShape;
}

const Banner = ({ type, intl }: IBannerProps) => {
  const { search } = useLocation();
  const lang = getSearch(search)?.lang || DEFAULT_LOCAL;

  const getCurrentLanguage = () => {
    return lang === 'en-US' ? 'en' : 'zh';
  };
  const banners = {
    db: {
      title: intl.formatMessage({ id: 'product.db.htitle' }),
      desc: intl.formatMessage({ id: 'product.db.hdesc' }),
      btn: (
        <>
          <MainButton
            type="real"
            isAnimation={true}
            btnText={intl.formatMessage({ id: 'product.db.btn' })}
            affterIcon={<DownOutlined />}
          />
          <MainButton
            type="illusory"
            btnText={intl.formatMessage({ id: 'product.db.btn2' })}
            onClick={() => {
              history.push(
                historyPushLinkAt(
                  `/docs/tugraph-db/${getCurrentLanguage()}/4.5.2/guide`,
                ),
              );
            }}
            befforeIcon={<FileTextOutlined />}
          />
        </>
      ),
    },
    analytics: {
      title: intl.formatMessage({ id: 'product.analytics.htitle' }),
      desc: intl.formatMessage({ id: 'product.analytics.hdesc' }),
      btn: (
        <>
          <MainButton
            type="real"
            isAnimation={true}
            btnText={intl.formatMessage({ id: 'product.analytics.btn' })}
            affterIcon={<DownOutlined />}
          />
          <MainButton
            type="illusory"
            btnText={intl.formatMessage({ id: 'product.analytics.btn2' })}
            onClick={() => {
              window.open('https://geaflow.apache.org/docs/guide/');
            }}
            befforeIcon={<FileTextOutlined />}
          />
        </>
      ),
    },
    enterprise: {
      title: intl.formatMessage({ id: 'product.enterprise.htitle' }),
      desc: intl.formatMessage({ id: 'product.enterprise.hdesc' }),
      subTitle: intl.formatMessage({ id: 'product.enterprise' }),
      btn: (
        <MainButton
          type="illusory"
          isAnimation={true}
          btnText={intl.formatMessage({ id: 'product.enterprise.btn' })}
          affterIcon={<ArrowRightOutlined />}
        />
      ),
    },
    cloud: {
      title: intl.formatMessage({ id: 'product.cloud.htitle' }),
      desc: intl.formatMessage({ id: 'product.cloud.hdesc' }),
      subTitle: intl.formatMessage({ id: 'product.enterprise' }),
      btn: (
        <>
          <MainButton
            type="illusory"
            isAnimation={true}
            btnText={intl.formatMessage({ id: 'product.cloud.btn' })}
            affterIcon={<ArrowRightOutlined />}
          />
          <MainButton
            type="illusory"
            btnText={intl.formatMessage({ id: 'product.cloud.btn2' })}
            onClick={() => {
              window.open(
                'https://market.aliyun.com/products/56024006/cmgj00065940.html?spm=5176.21213303.result.4.76342f3dUpiTZe&innerSource=search_TuGraph#sku=yuncode5994000001',
              );
            }}
          />
        </>
      ),
    },
  };

  const bannerDetail = banners?.[type] || {};

  return (
    <ProductBanner
      title={bannerDetail.title}
      description={bannerDetail.desc}
      btnContent={bannerDetail.btn}
      subTitle={bannerDetail?.subTitle}
    />
  );
};

export default Banner;
