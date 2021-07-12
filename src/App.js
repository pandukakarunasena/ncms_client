import React, { useEffect, useState } from 'react';
import { Menu, BackTop } from 'antd';
import './App.css';

import MainLayout from './components/layout/MainLayout';
import MOHAdmin from './components/admin/MOHAdmin';
import Doctor from './components/doctor/Doctor';
import Auth from './components/auth/Auth';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import { Role } from './helpers/role';
import { history } from './helpers/history';
import { PrivateRoute } from './shared_components/PrivateRoutes';

import { authenticationService } from './services/authentication-service';

const style = {
  height: 40,
  width: 40,
  lineHeight: '40px',
  borderRadius: 4,
  backgroundColor: '#1088e9',
  color: '#fff',
  textAlign: 'center',
  fontSize: 14,
};

function App() {
  const [currentUser, setCurrentUser] = useState(null);
  const [isMOHAdmin, setIsMOHAdmin] = useState(false);
  const [isDoctor, setIsDoctor] = useState(false);
  const [isChiefDoctor, setIsChiefDoctor] = useState(false);
  const [isStaff, setIsStaff] = useState(false);

  console.log('user logged in:', currentUser);

  useEffect(() => {
    authenticationService.currentUser.subscribe((x) => {
      setCurrentUser(x);
      setIsMOHAdmin(x && x.data.role === Role.MOHAdmin);
      setIsChiefDoctor(x && x.data.role === Role.ChiefDoctor);
      setIsDoctor(x && x.data.role === Role.Doctor);
      setIsStaff(x && x.data.role === Role.Staff);
    });
  }, [isMOHAdmin, isDoctor, isStaff, isChiefDoctor]);

  const logout = () => {
    authenticationService.logout();
    history.push('/');
  };

  return (
    <Router>
      <div className="container">
        {currentUser ? (
          <nav className="main_nav">
            <Menu theme="dark" mode="horizontal">
              <Menu.Item>
                <Link to="/">Home</Link>
              </Menu.Item>
              <Menu.Item>
                {isDoctor && (
                  <Menu.Item>
                    <Link to="/doctor">Your Profile</Link>
                  </Menu.Item>
                )}

                {isMOHAdmin && (
                  <Menu.Item>
                    <Link to="/mohadmin">Your Profile</Link>
                  </Menu.Item>
                )}
              </Menu.Item>
              <Menu.Item>
                <Link onClick={logout} to="/">
                  LOGOUT
                </Link>
              </Menu.Item>
            </Menu>
          </nav>
        ) : (
          <nav className="main_nav">
            <Menu theme="dark" mode="horizontal">
              <Menu.Item>
                <Link to="/">Home</Link>
              </Menu.Item>
              <Menu.Item>
                <Link to="/auth">LOGIN</Link>
              </Menu.Item>
            </Menu>
          </nav>
        )}

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route exact path="/" component={MainLayout} />
          <PrivateRoute
            path="/mohadmin"
            roles={[Role.MOHAdmin]}
            component={MOHAdmin}
          />
          <PrivateRoute
            path="/doctor"
            roles={[Role.Doctor]}
            component={Doctor}
          />
          <Route path="/auth" component={Auth} />
        </Switch>

        {/* <Switch>
          <Route path="/auth">
            <Auth />
          </Route>
          <Route path="/doctor">
            <Doctor />
          </Route>
          <Route path="/mohadmin">
            <MOHAdmin />
          </Route>
          <Route path="/">
            <MainLayout />
          </Route>
        </Switch> */}

        <BackTop>
          <div style={style}>UP</div>
        </BackTop>
      </div>
    </Router>
  );
}

export default App;
