import React from 'react';
import { Button, Dropdown } from 'antd';
import {
  AliyunOutlined,
  ArrowRightOutlined,
  DownOutlined,
  GithubOutlined,
  VerticalAlignBottomOutlined,
} from '@ant-design/icons';

import styles from './index.less';
import FadeInSection from '@/components/FadeInSection';
import VersionButton from '@/pages/new-pages/Home/components/VersionButton';

const Version = () => {
  const items = [
    { label: 'github', key: 'item-1', icon: <GithubOutlined /> }, // 菜单项务必填写 key
    { label: '阿里云', key: 'item-2', icon: <AliyunOutlined /> },
    { label: '下载中心', key: 'item-3', icon: <VerticalAlignBottomOutlined /> },
  ];

  const VERSION_LIST = [
    {
      key: 'comunity',
      versionName: 'TuGraph 社区版',
      versionType: '单机版',
      descList: [
        '完全开源免费，自由使用、修改和分发，降低使用成本',
        '集中式版本，支持高可用部署，轻松应对 TB 级别海量数据规模',
        '易用性强，可快速部署、轻松构建图应用',
        '社区活跃，问答和社群等社区技术支持快速响应',
      ],
      btn: <VersionButton type="experience" />,
    },
    {
      key: 'enterprise',
      versionName: 'TuGraph 企业版',
      versionType: '分布式',
      descList: [
        '提供图存储、研发、服务、运维的图研发全链路管理',
        '分布式架构，金融级别高可用能力，轻松支持 PB 级以上海量数据规模',
        '适用于超大数据量的高吞吐率和低延迟业务场景',
        '专业的技术支持服务（钉钉群、电话、工单、现场等）',
      ],
      btn: <VersionButton type="consult" style={{ background: '#e1e4e8' }} />,
    },
  ];

  return (
    <div className={styles.versionContainer}>
      <FadeInSection>
        <div className={styles.versionTitle}>选择版本</div>
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
