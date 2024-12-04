import {
  Button,
  Dropdown,
  Form,
  Input,
  Modal,
  Radio,
  Select,
  Space,
  Typography,
} from 'antd';
import styles from './index.less';
import { useMemo, useState } from 'react';
import {
  AliyunOutlined,
  ArrowRightOutlined,
  GithubOutlined,
  UpOutlined,
  VerticalAlignBottomOutlined,
} from '@ant-design/icons';
import { getSearch, historyPushLinkAt } from '@/util';
import { history, useIntl, useLocation } from 'umi';
import { DEFAULT_LOCAL } from '@/constant';

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
  const { search } = useLocation();
  const lang = getSearch(search)?.lang || DEFAULT_LOCAL;

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
    { label: intl.formatMessage({ id: 'form.need.value' }), value: '0' },
    { label: intl.formatMessage({ id: 'form.need.value1' }), value: '1' },
    { label: intl.formatMessage({ id: 'form.need.value2' }), value: '2' },
    { label: intl.formatMessage({ id: 'form.need.value3' }), value: '3' },
    { label: intl.formatMessage({ id: 'form.need.value4' }), value: '4' },
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
              <UpOutlined
                className={styles.arrowIcon}
                style={{ transform: `rotateX(${visible ? 0 : 180}deg)` }}
              />
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

  const onOk = (values: any) => {
    form.validateFields().then((values) => {
      const body = [];
      for (const [key, value] of Object.entries(values)) {
        body.push(`${key}: ${value}`);
      }

      const bodyString = body.join(';');
      // TODO 用邮件服务替换掉 https://dashboard.emailjs.com/
      window.location.href = `mailto:tugraph@service.alipay.com?subject=${btnText}&body=${bodyString}`;
    });
  };

  const POSITION_OPTION = useMemo(() => {
    if (['consult', 'connect'].includes(type)) {
      return (
        intl
          .formatMessage({ id: 'form.item.position.options' })
          ?.split(',')
          ?.map((item) => {
            return {
              label: item,
              value: item,
            };
          }) || []
      );
    } else {
      return [];
    }
  }, [intl, type]);

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
            label={intl.formatMessage({ id: 'form.item.type' })}
            name="type"
            rules={[
              {
                required: true,
                message: intl.formatMessage({ id: 'form.need.tip' }),
              },
            ]}
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
              rules={[
                {
                  required: true,
                  message: intl.formatMessage({ id: 'form.need.tip' }),
                },
              ]}
            >
              <Select
                placeholder={intl.formatMessage({ id: 'form.need.tip' })}
                options={POSITION_OPTION}
              />
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
        {lang === 'zh-CN' && (
          <div className={styles.footer}>
            <Typography.Text className={styles.tip} type="secondary">
              {intl.formatMessage({ id: 'form.tip0' })}
              <a
                href="https://render.alipay.com/p/yuyan/180020010001196791/preview.html?agreementId=AG00000174"
                target="_blank"
                rel="noopener noreferrer"
              >
                {intl.formatMessage({ id: 'form.rule' })}
              </a>
              {intl.formatMessage({ id: 'form.tip1' })}
            </Typography.Text>
          </div>
        )}
        <div className={styles.footerBtn}>
          <Space>
            <Button onClick={handleCancel}>
              {intl.formatMessage({ id: 'form.cancel' })}
            </Button>
            <Button type="primary" onClick={onOk}>
              {intl.formatMessage({ id: 'form.submit' })}
            </Button>
          </Space>
        </div>
      </Modal>
    </>
  );
};

export default MainButton;
