import { Banner } from '@/components/Banner';
import { Layout } from 'antd';
const { Header, Content, Footer } = Layout;

export default function IndexPage() {
  return (
    <Layout className="layout">
      {/* <Header>
        <div className="logo" />
      </Header> */}
      <Content>
        <Banner />
      </Content>
      <Footer style={{ textAlign: 'center' }}>xxx</Footer>
    </Layout>
  );
}
