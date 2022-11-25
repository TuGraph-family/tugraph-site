import React, { useEffect, useState } from 'react';
import { useIntl, useLocation } from 'umi';
import { Menu, Drawer, Collapse } from 'antd';
import cx from 'classnames';
import { useMedia } from 'react-use';
import type { MenuItem } from '@/interface';
import { MenuOutlined, CloseOutlined } from '@ant-design/icons';

import styles from './index.less';

const { Panel } = Collapse;

export const Header = ({ isStick }: { isStick?: boolean }) => {
  const intl = useIntl();
  const { pathname } = useLocation();
  const isWide = useMedia('(min-width: 767.99px)', true);
  const [popupMenuVisible, setPopupMenuVisible] = useState(false);

  const onTogglePopupMenuVisible = () => {
    setPopupMenuVisible(!popupMenuVisible);
  };

  const menuIcon = !isWide ? (
    <MenuOutlined
      className={styles.menuIcon}
      onClick={onTogglePopupMenuVisible}
    />
  ) : null;

  const menuItems: MenuItem[] = [
    {
      label: (
        <a href="/product" rel="noopener noreferrer">
          {intl.formatMessage({ id: 'header.product' })}
        </a>
      ),
      key: 'product',
    },
    {
      label: (
        <a href="/demo" rel="noopener noreferrer">
          {intl.formatMessage({ id: 'header.demo' })}
        </a>
      ),
      key: 'demo',
    },
    {
      label: (
        <a href="/doc" rel="noopener noreferrer">
          {intl.formatMessage({ id: 'header.doc' })}
        </a>
      ),
      key: 'doc',
    },
    {
      label: (
        <a href="/blog" rel="noopener noreferrer">
          {intl.formatMessage({ id: 'header.blog' })}
        </a>
      ),
      key: 'blog',
    },
    {
      label: intl.formatMessage({ id: 'header.community' }),
      key: 'community',
      children: [
        {
          label: (
            <a
              href="https://github.com/TuGraph-db"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </a>
          ),
          key: 'GitHub',
        },
        {
          label: (
            <a
              href="https://gitee.com/tugraph"
              target="_blank"
              rel="noopener noreferrer"
            >
              Gitee
            </a>
          ),
          key: 'Gitee',
        },
      ],
    },
    {
      label: (
        <a href="/download" rel="noopener noreferrer">
          {intl.formatMessage({ id: 'header.download' })}
        </a>
      ),
      key: 'download',
    },
  ];

  const pc = (
    <>
      <a href="/" rel="noopener noreferrer">
        <img
          className={styles.log}
          src="https://mdn.alipayobjects.com/huamei_qcdryc/afts/img/A*AbamQ5lxv0IAAAAAAAAAAAAADgOBAQ/original"
        />
      </a>

      <Menu
        className={styles.menu}
        activeKey={pathname.replace('/', '')}
        mode="horizontal"
        items={menuItems}
      />
    </>
  );

  const mobile = (
    <>
      <a href="/" rel="noopener noreferrer">
        <img src="https://mdn.alipayobjects.com/huamei_qcdryc/afts/img/A*AbamQ5lxv0IAAAAAAAAAAAAADgOBAQ/original" />
      </a>
      {menuIcon}
      <Drawer
        width={'100%'}
        drawerStyle={{
          backgroundImage: `url("https://gw.alipayobjects.com/mdn/rms_fa12c2/afts/img/A*7iehTZUVjWIAAAAAAAAAAAAAARQnAQ")`,
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
        }}
        headerStyle={{
          background: 'rgba(0, 0, 0, 0)',
          color: '#fff',
          border: 'none',
        }}
        bodyStyle={{
          color: '#fff',
        }}
        title={
          <img src="https://gw.alipayobjects.com/zos/bmw-prod/b54deb36-47fb-483a-8240-a682fe8348ec.svg" />
        }
        placement="right"
        closable={false}
        extra={<CloseOutlined onClick={() => setPopupMenuVisible(false)} />}
        visible={popupMenuVisible}
      >
        {menuItems?.map((item, key) => {
          if (item?.children) {
            return (
              <Collapse ghost key={key}>
                <Panel
                  header={item?.label}
                  key={key}
                  className={styles.collapse}
                >
                  {item?.children?.map(
                    (
                      child: { label: {} | null | undefined },
                      index: string | number,
                    ) => (
                      <div className="menuList" key={index}>
                        {child?.label}
                      </div>
                    ),
                  )}
                </Panel>
              </Collapse>
            );
          } else {
            return (
              <div className="menuList" key={key}>
                {item?.label}
              </div>
            );
          }
        })}
      </Drawer>
    </>
  );

  return (
    <div className={cx(styles.header, isStick ? styles.sticky : null)}>
      {isWide ? pc : mobile}
    </div>
  );
};
