import React, { Dispatch, SetStateAction } from 'react';
import {
  Checkbox,
  Col,
  Form,
  Input,
  Modal,
  Radio,
  Row,
  Typography,
} from 'antd';
import { getLocale, useIntl } from 'umi';
import { useMedia } from 'react-use';
import styles from './index.less';

export const ApplyForm = ({
  visible = false,
  setVisible,
}: {
  visible?: boolean;
  setVisible: Dispatch<SetStateAction<boolean>>;
}) => {
  const isWide = useMedia('(min-width: 767.99px)', true);
  const intl = useIntl();
  const lang = getLocale();
  const [form] = Form.useForm();

  const onOk = (values: any) => {
    form.validateFields().then((values) => {
      let body = [];
      for (const [key, value] of Object.entries(values)) {
        body.push(`${key}: ${value}`);
      }

      const bodyString = body.join(';');
      // TODO 用邮件服务替换掉 https://dashboard.emailjs.com/
      window.location.href = `mailto:tugraph@service.alipay.com?subject=${intl.formatMessage(
        {
          id: 'form.banner.slogan',
        },
      )}&body=${bodyString}`;
    });
  };

  return (
    <Modal
      width={isWide ? 800 : '100%'}
      title={
        <>
          {intl.formatMessage({ id: 'form.banner.slogan' })}
          <span>{intl.formatMessage({ id: 'form.banner.desc' })}</span>
        </>
      }
      open={visible}
      onOk={onOk}
      onCancel={() => {
        setVisible(false);
      }}
      okText={intl.formatMessage({ id: 'form.submit' })}
      className={styles.containerWrapper}
      centered={true}
    >
      <Form
        form={form}
        name="applyForFree"
        layout={'vertical'}
        labelCol={{ span: 21 }}
        initialValues={{ remember: true }}
        autoComplete="off"
      >
        <Row gutter={isWide ? 56 : 24}>
          <Col span={isWide ? (lang === 'zh-CN' ? 12 : 20) : 24}>
            <Form.Item
              label={intl.formatMessage({ id: 'form.item.need' })}
              name={intl.formatMessage({ id: 'form.need' })}
              rules={[
                {
                  required: true,
                  message: intl.formatMessage({ id: 'form.need.tip' }),
                },
              ]}
              className={styles.needItem}
            >
              <Radio.Group>
                <Radio value="0">
                  {intl.formatMessage({ id: 'form.need.value' })}
                </Radio>
                <Radio value="1">
                  {intl.formatMessage({ id: 'form.need.value1' })}
                </Radio>
                <Radio value="2">
                  {intl.formatMessage({ id: 'form.need.value2' })}
                </Radio>
                <Radio value="3">
                  {intl.formatMessage({ id: 'form.need.value3' })}
                </Radio>
              </Radio.Group>
            </Form.Item>
          </Col>
        </Row>
        <Row gutter={isWide ? 56 : 24}>
          <Col span={isWide ? 12 : 24}>
            <Form.Item
              label={intl.formatMessage({ id: 'form.item.name' })}
              name={intl.formatMessage({ id: 'form.name' })}
              rules={[{ required: true }]}
            >
              <Input
                placeholder={intl.formatMessage({
                  id: 'form.input.placeholder',
                })}
              />
            </Form.Item>
          </Col>
          <Col span={isWide ? 12 : 24}>
            <Form.Item
              label={intl.formatMessage({ id: 'form.item.phone' })}
              name={intl.formatMessage({ id: 'form.item.phone' })}
              rules={[{ required: true }]}
              required={true}
            >
              <Input
                placeholder={intl.formatMessage({
                  id: 'form.input.placeholder',
                })}
              />
            </Form.Item>
          </Col>
          <Col span={isWide ? 12 : 24}>
            <Form.Item
              label={intl.formatMessage({ id: 'form.item.email' })}
              name={intl.formatMessage({ id: 'form.item.email' })}
              rules={[{ required: true, type: 'email' }]}
            >
              <Input
                type="email"
                placeholder={intl.formatMessage({
                  id: 'form.input.placeholder',
                })}
              />
            </Form.Item>
          </Col>
          <Col span={isWide ? 12 : 24}>
            <Form.Item
              label={intl.formatMessage({ id: 'form.item.firm' })}
              name={intl.formatMessage({ id: 'form.item.firm' })}
              rules={[{ required: true }]}
            >
              <Input
                placeholder={intl.formatMessage({
                  id: 'form.input.placeholder',
                })}
              />
            </Form.Item>
          </Col>
          <Col span={isWide ? 12 : 24}>
            <Form.Item
              label={intl.formatMessage({ id: 'form.item.position' })}
              name={intl.formatMessage({ id: 'form.item.position' })}
              rules={[{ required: true }]}
            >
              <Input
                placeholder={intl.formatMessage({
                  id: 'form.input.placeholder',
                })}
              />
            </Form.Item>
          </Col>
          <Col span={isWide ? 12 : 24}>
            <Form.Item
              label={intl.formatMessage({ id: 'form.item.city' })}
              name={intl.formatMessage({ id: 'form.item.city' })}
              rules={[{ required: true }]}
            >
              <Input
                placeholder={intl.formatMessage({
                  id: 'form.input.placeholder',
                })}
              />
            </Form.Item>
          </Col>
        </Row>

        <div className={styles.itemWithTip}>
          <Form.Item
            label={
              <>
                {intl.formatMessage({ id: 'form.item.situation' })}
                <span className={styles.messageDetail}>
                  {intl.formatMessage({ id: 'form.item.situation.detail' })}
                </span>
              </>
            }
            name={intl.formatMessage({ id: 'form.item.situation' })}
            rules={[{ required: true }]}
          >
            <Input.TextArea
              placeholder={intl.formatMessage({
                id: 'form.input.placeholder',
              })}
            />
          </Form.Item>
        </div>
        {/* {lang === 'zh-CN' && (
          <Form.Item
            name={intl.formatMessage({ id: 'form.submit.info' })}
            valuePropName="checked"
            rules={[{ required: true }]}
          >
            <Checkbox defaultChecked={false}>
              {intl.formatMessage({ id: 'form.submit.info' })}
            </Checkbox>
          </Form.Item>
        )} */}

        {lang === 'zh-CN' && (
          <div className={styles.footer}>
            {/* <div className={styles.splitLine} /> */}
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
      </Form>
    </Modal>
  );
};
