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
  DownOutlined,
  GithubOutlined,
  UpOutlined,
  VerticalAlignBottomOutlined,
} from '@ant-design/icons';

const { Item } = Form;

interface IVersionButtonProps {
  type: 'experience' | 'consult';
  style?: Record<string, any>;
}

const VersionButton: React.FC<IVersionButtonProps> = ({
  type,
  style,
  ...props
}) => {
  const [open, setOpen] = useState(false);
  const [visible, setVisible] = useState(false);
  const [form] = Form.useForm();

  const items = [
    { label: 'github', key: 'item-1', icon: <GithubOutlined /> },
    { label: '阿里云', key: 'item-2', icon: <AliyunOutlined /> },
    { label: '下载中心', key: 'item-3', icon: <VerticalAlignBottomOutlined /> },
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

  return (
    <>
      {type === 'experience' ? (
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
            社区版体验
            {visible ? (
              <UpOutlined className={styles.arrowIcon} />
            ) : (
              <DownOutlined className={styles.arrowIcon} />
            )}
          </Button>
        </Dropdown>
      ) : (
        <Button
          size="large"
          shape="round"
          className={styles.consult}
          onClick={() => setOpen(true)}
          style={style}
          {...props}
        >
          企业版咨询
        </Button>
      )}

      <Modal
        wrapClassName={styles.consultModal}
        open={open}
        onCancel={handleCancel}
        width={800}
        title={
          <div className={styles.modalHeader}>
            <div className={styles.title}>企业版咨询</div>
            <div className={styles.desc}>
              高可用、高稳定、高性能、大规模、专业服务支持
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
              label="您的姓名"
              name="name"
              rules={[{ required: true, message: '请输入' }]}
            >
              <Input placeholder="请输入" />
            </Item>
            <Item
              label="手机"
              name="phone"
              rules={[{ required: true, message: '请输入' }]}
            >
              <Input placeholder="请输入" />
            </Item>
          </Space>
          <Space size={40}>
            <Item
              label="电子邮件"
              name="email"
              rules={[{ required: true, message: '请输入' }]}
            >
              <Input placeholder="请输入" />
            </Item>
            <Item
              label="公司名称"
              name="company"
              rules={[{ required: true, message: '请输入' }]}
            >
              <Input placeholder="请输入" />
            </Item>
          </Space>
          <Space size={40}>
            <Item
              label="职位"
              name="position"
              rules={[{ required: true, message: '请选择' }]}
            >
              <Select placeholder="请选择" />
            </Item>
            <Item
              label="所在城市"
              name="city"
              rules={[{ required: true, message: '请输入' }]}
            >
              <Input placeholder="请输入" />
            </Item>
          </Space>

          <Item
            label="具体需求"
            name="content"
            rules={[{ required: true, message: '请输入' }]}
          >
            <Input.TextArea
              placeholder="您计划将本产品应用于什么业务场景和期望达到什么效果，帮助我们更好了解您的需求"
              autoSize={{ minRows: 5, maxRows: 5 }}
            />
          </Item>
        </Form>
        <div className={styles.footerBtn}>
          <Space>
            <Button onClick={handleCancel}>取消</Button>
            <Button type="primary">提交</Button>
          </Space>
        </div>
      </Modal>
    </>
  );
};

export default VersionButton;
