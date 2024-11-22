import {
  Button,
  Dropdown,
  Form,
  Input,
  Modal,
  Radio,
  Select,
  Space,
} from 'antd';
import styles from './index.less';
import { useState } from 'react';
import {
  AliyunOutlined,
  ArrowRightOutlined,
  DownOutlined,
  GithubOutlined,
  UpOutlined,
  VerticalAlignBottomOutlined,
} from '@ant-design/icons';
import { historyPushLinkAt } from '@/util';
import { history, useIntl } from 'umi';

const { Item } = Form;

interface IMainButtonProps {
  type: 'experience' | 'consult' | 'connect';
  style?: Record<string, any>;
  btnText: string;
}

const MainButton: React.FC<IMainButtonProps> = ({
  type,
  style,
  btnText,
  ...props
}) => {
  const intl = useIntl();
  const [open, setOpen] = useState(false);
  const [visible, setVisible] = useState(false);
  const [form] = Form.useForm();

  const items = [
    {
      label: 'github',
      key: 'item-1',
      icon: <GithubOutlined />,
      onClick: () => window.open('https://github.com/TuGraph-family'),
    },
    {
      label: intl.formatMessage({ id: 'home.btn.desc1' }),
      key: 'item-2',
      icon: <AliyunOutlined />,
      onClick: () => window.open('https://www.aliyun.com/product/graphdb'),
    },
    {
      label: intl.formatMessage({ id: 'header.assets.download' }),
      key: 'item-3',
      icon: <VerticalAlignBottomOutlined />,
      onClick: () => history.push(historyPushLinkAt('/download')),
    },
  ];

  const TYPE_OPTION = [
    { label: 'TuGraph 企业版价格', value: 'a' },
    { label: 'TuGraph 企业版试用', value: 'b' },
    { label: '预约现场技术交流', value: 'c' },
    { label: '成为 TuGraph 合作伙伴', value: 'd' },
    { label: '其他', value: 'e' },
  ];

  const handleCancel = () => {
    form.resetFields();
    setOpen(false);
  };

  const renderBtn = () => {
    switch (type) {
      case 'experience':
        return (
          <Dropdown
            menu={{ items }}
            overlayClassName={styles.communityDropdown}
            trigger={['click']}
            onOpenChange={(visible) => setVisible(visible)}
          >
            <Button
              type="primary"
              size="large"
              shape="round"
              className={styles.experience}
              style={style}
              {...props}
            >
              {btnText}
              {visible ? (
                <UpOutlined className={styles.arrowIcon} />
              ) : (
                <DownOutlined className={styles.arrowIcon} />
              )}
            </Button>
          </Dropdown>
        );
      case 'consult':
        return (
          <Button
            size="large"
            shape="round"
            className={styles.consult}
            onClick={() => setOpen(true)}
            style={style}
            {...props}
          >
            {btnText}
          </Button>
        );
      case 'connect':
        return (
          <Button
            type="primary"
            size="large"
            shape="round"
            className={styles.connect}
            onClick={() => setOpen(true)}
            style={style}
            {...props}
          >
            {btnText}
            <ArrowRightOutlined className={styles.arrowIcon} />
          </Button>
        );
      default:
        return null;
    }
  };

  return (
    <>
      {renderBtn()}
      <Modal
        wrapClassName={styles.consultModal}
        open={open}
        onCancel={handleCancel}
        width={800}
        title={
          <div className={styles.modalHeader}>
            <div className={styles.title}>{btnText}</div>
            <div className={styles.desc}>
              {intl.formatMessage({ id: 'form.banner.desc' })}
            </div>
          </div>
        }
        footer={null}
      >
        <Form form={form} layout="vertical">
          <Item
            label="您想咨询的问题类型"
            name="type"
            rules={[{ required: true, message: '请选择咨询类型' }]}
          >
            <Radio.Group>
              <Space direction="vertical">
                {TYPE_OPTION.map((item) => (
                  <Radio key={item.value} value={item.value}>
                    {item.label}
                  </Radio>
                ))}
              </Space>
            </Radio.Group>
          </Item>
          <Space size={40}>
            <Item
              label={intl.formatMessage({ id: 'form.item.name' })}
              name="name"
              rules={[
                {
                  required: true,
                  message: intl.formatMessage({
                    id: 'form.input.placeholder',
                  }),
                },
              ]}
            >
              <Input
                placeholder={intl.formatMessage({
                  id: 'form.input.placeholder',
                })}
              />
            </Item>
            <Item
              label={intl.formatMessage({ id: 'form.item.phone' })}
              name="phone"
              rules={[
                {
                  required: true,
                  message: intl.formatMessage({
                    id: 'form.input.placeholder',
                  }),
                },
              ]}
            >
              <Input
                placeholder={intl.formatMessage({
                  id: 'form.input.placeholder',
                })}
              />
            </Item>
          </Space>
          <Space size={40}>
            <Item
              label={intl.formatMessage({ id: 'form.item.email' })}
              name="email"
              rules={[
                {
                  required: true,
                  message: intl.formatMessage({
                    id: 'form.input.placeholder',
                  }),
                },
              ]}
            >
              <Input
                placeholder={intl.formatMessage({
                  id: 'form.input.placeholder',
                })}
              />
            </Item>
            <Item
              label={intl.formatMessage({ id: 'form.item.firm' })}
              name="company"
              rules={[
                {
                  required: true,
                  message: intl.formatMessage({
                    id: 'form.input.placeholder',
                  }),
                },
              ]}
            >
              <Input
                placeholder={intl.formatMessage({
                  id: 'form.input.placeholder',
                })}
              />
            </Item>
          </Space>
          <Space size={40}>
            <Item
              label={intl.formatMessage({ id: 'form.item.position' })}
              name="position"
              rules={[{ required: true, message: '请选择' }]}
            >
              <Select placeholder="请选择" />
            </Item>
            <Item
              label={intl.formatMessage({ id: 'form.item.city' })}
              name="city"
              rules={[
                {
                  required: true,
                  message: intl.formatMessage({
                    id: 'form.input.placeholder',
                  }),
                },
              ]}
            >
              <Input
                placeholder={intl.formatMessage({
                  id: 'form.input.placeholder',
                })}
              />
            </Item>
          </Space>

          <Item
            label={intl.formatMessage({ id: 'form.item.situation' })}
            name="content"
            rules={[
              {
                required: true,
                message: intl.formatMessage({
                  id: 'form.input.placeholder',
                }),
              },
            ]}
          >
            <Input.TextArea
              placeholder={intl.formatMessage({
                id: 'form.item.situation.detail',
              })}
              autoSize={{ minRows: 5, maxRows: 5 }}
            />
          </Item>
        </Form>
        <div className={styles.footerBtn}>
          <Space>
            <Button onClick={handleCancel}>取消</Button>
            <Button type="primary">
              {intl.formatMessage({ id: 'form.submit' })}
            </Button>
          </Space>
        </div>
      </Modal>
    </>
  );
};

export default MainButton;
