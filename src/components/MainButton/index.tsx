import {
  Button,
  Dropdown,
  Form,
  Input,
  Modal,
  notification,
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
import { IFormValues } from '@/interface';
import success from '@/assets/icon/success.svg';
import { useHome } from '@/hooks/useHome';
import { useMedia } from 'react-use';
import moment from 'moment';

const { Item } = Form;

interface IMainButtonProps {
  type: 'experience' | 'consult' | 'connect';
  style?: Record<string, any>;
  btnText: string;
  overlayStyle?: Record<string, any>;
}

const MainButton: React.FC<IMainButtonProps> = ({
  type,
  style,
  btnText,
  overlayStyle,
  ...props
}) => {
  const intl = useIntl();
  const [open, setOpen] = useState(false);
  const [visible, setVisible] = useState(false);
  const [form] = Form.useForm();
  const { search } = useLocation();
  const lang = getSearch(search)?.lang || DEFAULT_LOCAL;
  const isWide = useMedia('(min-width: 767.99px)', true);

  const { runRegister } = useHome();

  const items = [
    {
      label: 'github',
      key: 'item-1',
      icon: <GithubOutlined />,
      onClick: () => {
        setVisible(false);
        window.open('https://github.com/TuGraph-family');
      },
    },
    {
      label: intl.formatMessage({ id: 'home.btn.desc1' }),
      key: 'item-2',
      icon: <AliyunOutlined />,
      onClick: () => {
        setVisible(false);
        window.open('https://aliyun-computenest.github.io/quickstart-tugraph/');
      },
    },
    {
      label: intl.formatMessage({ id: 'header.assets.download' }),
      key: 'item-3',
      icon: <VerticalAlignBottomOutlined />,
      onClick: () => {
        setVisible(false);
        history.push(historyPushLinkAt('/download'));
      },
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
    const key = moment().valueOf();
    switch (type) {
      case 'experience':
        return (
          <Dropdown
            menu={{ items }}
            overlayClassName={styles.communityDropdown}
            trigger={['hover', 'click']}
            onOpenChange={(visible) => setVisible(visible)}
            overlayStyle={overlayStyle}
            getPopupContainer={(triggerNode) => triggerNode || document.body}
          >
            <Button
              id={'main-dropdown-button-' + key}
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

  const onOk = () => {
    form.validateFields().then(async (values: API.AskRegisterRequest) => {
      const res = await runRegister(values);
      if (res) {
        handleCancel();
        notification.success({
          message: '提交成功',
          icon: <img src={success} />,
          style: { borderRadius: '8px' },
          description:
            '感谢您的使用，我们将会在 2 个工作日内完成审核，并通过邮件与您联系。',
        });
      }
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

  const spaceSize = isWide ? 40 : 0;
  const spaceDirection = isWide ? 'horizontal' : 'vertical';

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
            name="askType"
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
                  <Radio key={item.value} value={item.label}>
                    {item.label}
                  </Radio>
                ))}
              </Space>
            </Radio.Group>
          </Item>
          <Space size={spaceSize} direction={spaceDirection}>
            <Item
              label={intl.formatMessage({ id: 'form.item.name' })}
              name="user"
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
          <Space size={spaceSize} direction={spaceDirection}>
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
              name="companyName"
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
          <Space size={spaceSize} direction={spaceDirection}>
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
