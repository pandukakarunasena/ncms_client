import React from 'react';
import { Menu } from 'antd';
import './App.css';

import MainLayout from './components/layout/MainLayout';
import MOHAdmin from './components/admin/MOHAdmin';
import Doctor from './components/doctor/Doctor';
import Auth from './components/auth/Auth';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import RegistrationForm from './components/admin/RegisterForm';

function App() {
  return (
    <Router>
      <div>
        <nav>
          <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['2']}>
            <Menu.Item>
              <Link to="/">Home</Link>
            </Menu.Item>
            <Menu.Item>
              <Link to="/mohadmin">MOH admin</Link>
            </Menu.Item>
            <Menu.Item>
              <Link to="/doctor">Doctor</Link>
            </Menu.Item>
            <Menu.Item>
              <Link to="/auth">Auth</Link>
            </Menu.Item>
          </Menu>
        </nav>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/auth">
            <Auth />
          </Route>
          <Route path="/doctor">
            <Doctor />
          </Route>
          <Route path="/mohadmin">
            <MOHAdmin />
          </Route>
          <Route path="/register">
            <RegistrationForm />
          </Route>
          <Route path="/">
            <MainLayout />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
