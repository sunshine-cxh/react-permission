// 登录组件
import React, { Component } from 'react';
import { Form, Input, Button } from 'antd';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { UsergroupAddOutlined, LockOutlined } from '@ant-design/icons';
import { loginAsync } from '../../redux/action';
import './index.less';

@withRouter
@connect(null, { loginAsync })
class Login extends Component {
  onFinish = async (values) => {
    const { username, password } = values;
    await this.props.loginAsync(username, password);
    // 跳转到home
    this.props.history.replace('/');
  };

  render() {
    const layout = {
      wrapperCol: { span: 10 },
    };
    return (
      <div className="loginContainer">
        <div className="formContainer">
          <div className="login">
            <h1>我和我家小惠的后台</h1>
            <Form {...layout} className="form" onFinish={this.onFinish}>
              <Form.Item
                name="username"
                rules={[{ required: true, message: '请输入用户名' }]}
              >
                <Input placeholder="用户名" prefix={<UsergroupAddOutlined />} />
              </Form.Item>
              <Form.Item
                name="password"
                rules={[{ required: true, message: '请输入密码' }]}
              >
                <Input
                  type="password"
                  placeholder="密码"
                  prefix={<LockOutlined />}
                />
              </Form.Item>
              <Form.Item>
                <Button className="button" type="primary" htmlType="submit">
                  登录
                </Button>
              </Form.Item>
            </Form>
          </div>
        </div>
      </div>
    );
  }
}
export default Login;
