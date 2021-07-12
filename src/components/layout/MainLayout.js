import { Layout } from 'antd';
import DailyStatCards from '../stats/DailyStatCards';
import LandingPage from '../landing/LandingPage';
const { Header, Footer } = Layout;

function MainLayout() {
  return (
    <Layout className="layout">
      {/* <Header>
        <div className="logo" />
      </Header> */}
      <DailyStatCards />

      <LandingPage />

      <Footer style={{ textAlign: 'center' }}>
        Ant Design ©2018 Created by panduka karunasena with 💟{' '}
      </Footer>
    </Layout>
  );
}

export default MainLayout;
