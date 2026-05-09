import {
  Button,
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
import { ReactElement, useMemo, useState } from 'react';
import { getSearch } from '@/util';
import { useIntl, useLocation } from 'umi';
import { DEFAULT_LOCAL } from '@/constant';
import success from '@/assets/icon/success.svg';
import { useHome } from '@/hooks/useHome';
import { useMedia } from 'react-use';
import { motion } from 'framer-motion';
import cx from 'classnames';

const { Item } = Form;

interface IMainButtonProps {
  type: 'real' | 'illusory';
  style?: Record<string, any>;
  btnText: string;
  isAnimation?: boolean;
  isMotion?: boolean;
  onClick?: () => void;
  befforeIcon?: ReactElement;
  affterIcon?: ReactElement;
}

const MainButton: React.FC<IMainButtonProps> = ({
  type,
  btnText,
  isAnimation = false,
  isMotion = true,
  befforeIcon,
  affterIcon,
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

  const onBtnClick = () => {
    switch (type) {
      case 'real':
        return setVisible(!visible);
      case 'illusory':
        return setOpen(true);
      default:
        return;
    }
  };

  return (
    <>
      {
        <div>
          <motion.button
            className={cx(styles[type], isAnimation ? styles.wbg : null)}
            whileHover={isMotion ? { scale: 1.05, y: -2 } : {}}
            whileTap={isMotion ? { scale: 0.95 } : {}}
            transition={{
              type: 'spring',
              stiffness: 260,
              damping: 20,
              mass: 0.7,
            }}
            onClick={onBtnClick}
            onMouseLeave={() => {
              setVisible(false);
            }}
            {...props}
          >
            {isAnimation && (
              <svg className={styles.box}>
                <rect
                  className={styles.star}
                  x="1"
                  y="1"
                  width="99%"
                  height="42"
                  rx="21"
                  ry="21"
                  pathLength="1"
                />
              </svg>
            )}
            {befforeIcon && (
              <div className={styles.befforeIcon}>{befforeIcon}</div>
            )}
            {btnText}
            {affterIcon && (
              <div className={styles.affterIcon}>{affterIcon}</div>
            )}
            {visible && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.2 }}
                className={styles.dropdown}
              >
                {/* GitHub 选项 */}
                <a
                  href="https://github.com/TuGraph-family"
                  target="_blank"
                  rel="noreferrer"
                  className={styles.dropdownItem}
                  onClick={() => setVisible(false)}
                >
                  <span className={styles.dropdownItemContent}>
                    <svg
                      viewBox="0 0 24 24"
                      className={styles.dropdownItemIcon}
                    >
                      <path d="M12.001 2C6.47598 2 2.00098 6.475 2.00098 12C2.00098 16.425 4.86348 20.1625 8.83848 21.4875C9.33848 21.575 9.52598 21.275 9.52598 21.0125C9.52598 20.775 9.51348 19.9875 9.51348 19.15C7.00098 19.6125 6.35098 18.5375 6.15098 17.975C6.03848 17.6875 5.55098 16.8 5.12598 16.5625C4.77598 16.375 4.27598 15.9125 5.11348 15.9C5.90098 15.8875 6.46348 16.625 6.65098 16.925C7.55098 18.4375 8.98848 18.0125 9.56348 17.75C9.65098 17.1 9.91348 16.6625 10.201 16.4125C7.97598 16.1625 5.65098 15.3 5.65098 11.475C5.65098 10.3875 6.03848 9.4875 6.67598 8.7875C6.57598 8.5375 6.22598 7.5125 6.77598 6.1375C6.77598 6.1375 7.61348 5.875 9.52598 7.1625C10.326 6.9375 11.176 6.825 12.026 6.825C12.876 6.825 13.726 6.9375 14.526 7.1625C16.4385 5.8625 17.276 6.1375 17.276 6.1375C17.826 7.5125 17.476 8.5375 17.376 8.7875C18.0135 9.4875 18.401 10.375 18.401 11.475C18.401 15.3125 16.0635 16.1625 13.8385 16.4125C14.201 16.725 14.5135 17.325 14.5135 18.2625C14.5135 19.6 14.501 20.675 14.501 21.0125C14.501 21.275 14.6885 21.5875 15.1885 21.4875C19.259 20.1133 21.9999 16.2963 22.001 12C22.001 6.475 17.526 2 12.001 2Z" />
                    </svg>
                    GitHub
                  </span>
                  <svg viewBox="0 0 24 24" className={styles.dropdownItemArrow}>
                    <path d="M7 7h10v10M7 17 17 7" />
                  </svg>
                </a>

                <a
                  href="https://aliyun-computenest.github.io/quickstart-tugraph/"
                  target="_blank"
                  rel="noreferrer"
                  className={styles.dropdownItem}
                  onClick={() => setVisible(false)}
                >
                  <span className={styles.dropdownItemContent}>
                    <svg
                      viewBox="0 0 24 24"
                      className={styles.dropdownItemIcon}
                    >
                      <path d="M9.51445 5.14H4.67954C3.70366 5.14 2.76776 5.52766 2.07771 6.21771C1.38766 6.90776 1 7.84366 1 8.81954V15.1778C1 16.1537 1.38766 17.0896 2.07771 17.7796C2.76776 18.4697 3.70366 18.8573 4.67954 18.8573H9.52917L8.35908 17.2015L4.82304 16.1197C4.51117 16.0203 4.23916 15.8239 4.04659 15.5592C3.85401 15.2945 3.75092 14.9753 3.7523 14.6479V9.37147C3.74976 9.04385 3.85241 8.72406 4.04515 8.45913C4.23789 8.19419 4.51055 7.99809 4.82304 7.89965L8.35908 6.79579L9.51445 5.14ZM19.3388 5.14H14.4892L15.6593 6.79579L19.1953 7.89965C19.5074 7.99822 19.7796 8.19447 19.9717 8.45947C20.1638 8.72446 20.2657 9.04418 20.2624 9.37147V14.6479C20.2646 14.9749 20.1622 15.2941 19.9703 15.5589C19.7783 15.8236 19.5068 16.0202 19.1953 16.1197L15.6593 17.2015L14.4892 18.8573H19.3388C19.8213 18.8578 20.2991 18.7628 20.7447 18.5779C21.1903 18.3929 21.5949 18.1216 21.9352 17.7796C22.2755 17.4376 22.5448 17.0316 22.7275 16.5851C22.9103 16.1385 23.0028 15.6603 22.9999 15.1778V8.81954C22.9999 7.84684 22.6148 6.91372 21.9287 6.22419C21.2427 5.53467 20.3115 5.14486 19.3388 5.14ZM15.6666 11.1376H8.33698V12.7897H15.6666V11.1376Z" />
                    </svg>
                    阿里云
                  </span>
                  <svg viewBox="0 0 24 24" className={styles.dropdownItemArrow}>
                    <path d="M7 7h10v10M7 17 17 7" />
                  </svg>
                </a>
              </motion.div>
            )}
          </motion.button>
        </div>
      }
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
              <span
                href="https://render.alipay.com/p/yuyan/180020010001196791/preview.html?agreementId=AG00000174"
                target="_blank"
                rel="noopener noreferrer"
              >
                {intl.formatMessage({ id: 'form.rule' })}
              </span>
              {intl.formatMessage({ id: 'form.tip1' })}
            </Typography.Text>
          </div>
        )}
        <div className={styles.footerBtn}>
          <Space>
            <Button onClick={handleCancel} shape="round">
              {intl.formatMessage({ id: 'form.cancel' })}
            </Button>
            <Button type="primary" onClick={onOk} shape="round" color="#3b82f6">
              {intl.formatMessage({ id: 'form.submit' })}
            </Button>
          </Space>
        </div>
      </Modal>
    </>
  );
};

export default MainButton;
