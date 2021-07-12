import { Form, Input, Button } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import './LoginForm.css';
import { authenticationService } from '../../services/authentication-service';
import { history } from '../../helpers/history';
import { Role } from '../../helpers/role';
import { Redirect } from 'react-router-dom';

function NormalLoginForm() {
  // if (authenticationService.currentUserValue) {
  //   if (authenticationService.currentUserValue.data.role === Role.MOHAdmin) {
  //     history.push('/mohadmin');
  //   }

  //   if (authenticationService.currentUserValue.data.role === Role.Doctor) {
  //     history.push('/doctor');
  //   }
  // }
  const fetchUser = async (username, password) => {
    const user = await authenticationService.login(username, password);
    console.log('user fetched');
  };

  //const {data, status} =useQuery("user", fetchUser)

  const onFinish = (values) => {
    const { username, password } = values;
    fetchUser(username, password);
  };

  return (
    <div className="login_form_div">
      <Form name="normal_login" className="login-form" onFinish={onFinish}>
        <Form.Item
          name="username"
          rules={[
            {
              required: true,
              message: 'Please input your Username!',
            },
          ]}
        >
          <Input
            prefix={<UserOutlined className="site-form-item-icon" />}
            placeholder="Username"
          />
        </Form.Item>
        <Form.Item
          name="password"
          rules={[
            {
              required: true,
              message: 'Please input your Password!',
            },
          ]}
        >
          <Input
            prefix={<LockOutlined className="site-form-item-icon" />}
            type="password"
            placeholder="Password"
          />
        </Form.Item>

        <Form.Item>
          <Button
            type="primary"
            htmlType="submit"
            className="login-form-button"
          >
            Log in
          </Button>

          {authenticationService.currentUserValue &&
            authenticationService.currentUserValue.data.role ===
              Role.MOHAdmin && (
              <Redirect
                to={{
                  pathname: '/mohadmin',
                  state: { from: history.location },
                }}
              />
            )}

          {authenticationService.currentUserValue &&
            authenticationService.currentUserValue.data.role ===
              Role.Doctor && (
              <Redirect
                to={{
                  pathname: '/doctor',
                  state: { from: history.location },
                }}
              />
            )}
        </Form.Item>
      </Form>
    </div>
  );
}

export default NormalLoginForm;
