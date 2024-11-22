import { message, Select } from 'antd';
import CopyToClipboard from 'react-copy-to-clipboard';
import styles from './index.less';
import {
  DownloadOutlined,
  CopyOutlined,
  CaretDownOutlined,
} from '@ant-design/icons';
import { IntlShape } from 'react-intl';
import { useState } from 'react';

interface IDownAndCopyItemProps {
  type: 'down' | 'copy';
  intl: IntlShape;
  link?: string;
  options?: { label: string; value: string }[];
}
const DownAndCopyItem = ({
  type,
  intl,
  link = '',
  options = [],
}: IDownAndCopyItemProps) => {
  const [downlink, setDownLink] = useState(() => {
    return type === 'down' ? options?.[0].value : '';
  });

  return type === 'down' ? (
    <div className={styles.typeItemSelect}>
      <Select
        options={options}
        className={styles.select}
        value={downlink}
        suffixIcon={<CaretDownOutlined />}
        onChange={setDownLink}
      />
      <div
        className={styles.downloadBtn}
        onClick={() => {
          window.location.href = downlink;
        }}
      >
        <DownloadOutlined />
        {intl.formatMessage({ id: 'download.downloadBtn' })}
      </div>
    </div>
  ) : (
    <div className={styles.typeItemCopy}>
      <div>{link}</div>
      <CopyToClipboard
        text={link}
        onCopy={() => {
          message.success(
            intl.formatMessage({
              id: 'download.copySuccess',
            }),
          );
        }}
      >
        <div className={styles.buttonText}>
          <CopyOutlined />
          {intl.formatMessage({ id: 'download.copyLinkBtn' })}
        </div>
      </CopyToClipboard>
    </div>
  );
};

export default DownAndCopyItem;
