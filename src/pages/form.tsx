import React from 'react';
import { Button, Checkbox, Form, Input } from 'antd';
import { useIntl, isBrowser } from 'umi';
import { LayoutTemplate } from '@/components/LayoutTemplate';
import styles from './form.less';

export default function FormPage() {
  const intl = useIntl();

  const onFinish = (values: any) => {
    let body = [];
    for (const [key, value] of Object.entries(values)) {
      body.push(`${key}: ${value}`);
    }
    if (!isBrowser()) {
      const bodyString = body.join(';');
      // TODO 用邮件服务替换掉 https://dashboard.emailjs.com/
      window.location.href = `mailto:tugraph@service.alipay.com?subject=${intl.formatMessage(
        {
          id: 'form.banner.slogan',
        },
      )}&body=${bodyString}`;
    }
  };

  const content = (
    <div className={styles.containerWrapper}>
      <Form
        name="applyForFree"
        layout={'vertical'}
        labelCol={{ span: 20 }}
        initialValues={{ remember: true }}
        onFinish={onFinish}
        autoComplete="off"
      >
        <div className={styles.itemWithTip}>
          <div className={styles.tip}>
            {intl.formatMessage({ id: 'form.item.desc0' })}
          </div>
          <Form.Item
            label={intl.formatMessage({ id: 'form.item.title0' })}
            name={intl.formatMessage({ id: 'form.item.title0' })}
            rules={[{ required: true }]}
          >
            <Input.TextArea
              placeholder={intl.formatMessage({
                id: 'form.input.placeholder',
              })}
            />
          </Form.Item>
        </div>

        <Form.Item
          label={intl.formatMessage({ id: 'form.item.title1' })}
          name={intl.formatMessage({ id: 'form.item.name1' })}
          rules={[{ required: true }]}
        >
          <Input
            placeholder={intl.formatMessage({
              id: 'form.input.placeholder',
            })}
          />
        </Form.Item>

        <Form.Item
          label={intl.formatMessage({ id: 'form.item.title2' })}
          name={intl.formatMessage({ id: 'form.item.title2' })}
          rules={[{ required: true }]}
        >
          <Input
            placeholder={intl.formatMessage({
              id: 'form.input.placeholder',
            })}
          />
        </Form.Item>

        <div className={styles.itemWithTip}>
          <div className={styles.tip}>
            {intl.formatMessage({ id: 'form.item.desc3' })}
          </div>
          <Form.Item
            label={intl.formatMessage({ id: 'form.item.title3' })}
            name={intl.formatMessage({ id: 'form.item.title3' })}
            rules={[{ required: true, type: 'email' }]}
          >
            <Input
              type="email"
              placeholder={intl.formatMessage({
                id: 'form.input.placeholder',
              })}
            />
          </Form.Item>
        </div>

        <Form.Item
          label={intl.formatMessage({ id: 'form.item.title4' })}
          name={intl.formatMessage({ id: 'form.item.title4' })}
          rules={[{ required: true }]}
        >
          <Input
            placeholder={intl.formatMessage({
              id: 'form.input.placeholder',
            })}
          />
        </Form.Item>

        <Form.Item
          label={intl.formatMessage({ id: 'form.item.title5' })}
          name={intl.formatMessage({ id: 'form.item.title5' })}
          rules={[{ required: true }]}
        >
          <Input
            placeholder={intl.formatMessage({
              id: 'form.input.placeholder',
            })}
          />
        </Form.Item>

        <Form.Item
          name={intl.formatMessage({ id: 'form.submit.info' })}
          valuePropName="checked"
          rules={[{ required: true }]}
        >
          <Checkbox defaultChecked={false}>
            {intl.formatMessage({ id: 'form.submit.info' })}
          </Checkbox>
        </Form.Item>

        <Form.Item>
          <Button className={styles.submit} type="primary" htmlType="submit">
            {intl.formatMessage({ id: 'form.submit' })}
          </Button>
        </Form.Item>
      </Form>
    </div>
  );

  return (
    <LayoutTemplate
      bannerInfo={{
        bgIconUrl:
          'https://gw.alipayobjects.com/zos/bmw-prod/2a554dbd-14a3-41a5-a314-b9cafbe46023.svg',
        activeKey: 'demo',

        slogan: intl.formatMessage({ id: 'form.banner.slogan' }),
        subTitle: intl.formatMessage({ id: 'form.banner.subTitle' }),
      }}
      content={content}
    />
  );
}
