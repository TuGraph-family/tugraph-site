import React from 'react';
import { Button, Checkbox, Form, Input, Layout } from 'antd';
import { Banner } from '@/components/Banner';
import { Footer } from '@/components/Footer';
import { useIntl } from 'umi';

import styles from './form.less';

const { Content } = Layout;

export default function FormPage() {
  const intl = useIntl();

  const onFinish = (values: any) => {
    let body = [];
    for (const [key, value] of Object.entries(values)) {
      body.push(`${key}: ${value}`);
    }
    const bodyString = body.join(';');
    window.location.href = `mailto:tugraph@service.alipay.com?subject=${intl.formatMessage(
      { id: 'form.banner.slogan' },
    )}&body=${bodyString}`;
  };

  return (
    <Layout>
      <Content>
        <Banner
          activeKey={'demo'}
          bgUrl={
            'https://gw.alipayobjects.com/zos/bmw-prod/fa509fe6-d53c-40ce-8034-0456823f0713.svg'
          }
          mobileIcon={
            'https://gw.alipayobjects.com/zos/bmw-prod/875fbeba-6f1e-4a99-93ab-7d1b74b3b86b.svg'
          }
          subTitle={intl.formatMessage({ id: 'form.banner.subTitle' })}
          slogan={intl.formatMessage({ id: 'form.banner.slogan' })}
        />
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
              <Button
                className={styles.submit}
                type="primary"
                htmlType="submit"
              >
                {intl.formatMessage({ id: 'form.submit' })}
              </Button>
            </Form.Item>
          </Form>
        </div>
      </Content>
      <Footer />
    </Layout>
  );
}
