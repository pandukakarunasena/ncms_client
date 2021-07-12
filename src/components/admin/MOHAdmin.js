import React, { useState } from 'react';
import { Layout, Menu } from 'antd';
import {
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  UserOutlined,
  VideoCameraOutlined,
  UploadOutlined,
} from '@ant-design/icons';
import DailyStatCards from '../stats/DailyStatCards';
import HospitalForm from './HospitalForm';
import RegisterForm from './RegisterForm';
import UsersList from './UsersList';
import HospitalList from './HospitalList';
import { Switch, Route, Link, useRouteMatch } from 'react-router-dom';

const { Header, Sider, Content } = Layout;

function MOHAdmin() {
  let match = useRouteMatch();

  const [collapsed, setCollapsed] = useState(false);

  const toggle = () => {
    setCollapsed(!collapsed);
  };

  return (
    <>
      <Layout>
        <Sider trigger={null} collapsible collapsed={collapsed}>
          {/* <div className="logo" /> */}
          <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
            <Menu.Item key="1" icon={<UserOutlined />}>
              <Link to={`${match.url}/hospitals`}>All Users</Link>
            </Menu.Item>
            <Menu.Item key="2" icon={<VideoCameraOutlined />}>
              <Link to={`${match.url}/users`}>All Hospitals</Link>
            </Menu.Item>
            <Menu.Item key="3" icon={<UploadOutlined />}>
              <Link to={`${match.url}/addhospital`}>Add New Hospital</Link>
            </Menu.Item>
            <Menu.Item key="4" icon={<UploadOutlined />}>
              <Link to={`${match.url}/adduser`}>Add New User</Link>
            </Menu.Item>
          </Menu>
        </Sider>
        <Layout className="site-layout">
          {/* <Header className="site-layout-background" style={{ padding: 0 }}>
            {React.createElement(
              collapsed ? MenuUnfoldOutlined : MenuFoldOutlined,
              {
                className: 'trigger',
                onClick: toggle,
              }
            )}
          </Header> */}
          <DailyStatCards />
          <Content
            className="site-layout-background"
            style={{
              margin: '24px 16px',
              padding: 24,
              minHeight: 280,
            }}
          >
            <Switch>
              <Route path={`${match.path}/hospitals`}>
                <HospitalList />
              </Route>
              <Route path={`${match.path}/users`}>
                <UsersList />
              </Route>
              <Route path={`${match.path}/adduser`}>
                <HospitalForm />
              </Route>
              <Route path={`${match.path}/addhospital`}>
                <RegisterForm />
              </Route>
            </Switch>
          </Content>
        </Layout>
      </Layout>
    </>
  );
}

export default MOHAdmin;
