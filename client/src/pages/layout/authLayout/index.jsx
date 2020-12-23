import React, { Component, lazy, Suspense } from 'react';
import { Layout, Menu, Dropdown, Spin } from 'antd';
import { connect } from 'react-redux';
import { Route, withRouter } from 'react-router-dom';
import cx from 'classnames';
import {
  DesktopOutlined,
  UserOutlined,
  FullscreenOutlined,
  DownOutlined,
} from '@ant-design/icons';
import CursomBreadcrumb from '../../../components/cursomBreadcrumb';
import { getUserInfoAsync } from '../../../redux/action';
import logo from '../../../assets/logo.jpeg';
import './index.less';

const { Header, Content, Sider } = Layout;
const { SubMenu } = Menu;

@withRouter
@connect((state) => ({ userInfo: state.user }), { getUserInfoAsync })
class AuthLayout extends Component {
  state = {
    collapsed: false,
    routes: {}, // 路由信息
    menuLoading: false, // 左侧菜单loading
  };

  // 渲染左侧菜单
  renderMenus = (menus) => {
    if (!menus) return null;
    return menus.map((menu) => {
      if (menu.children && menu.children.length > 0) {
        return (
          <SubMenu key={menu._id} icon={<UserOutlined />} title={menu.name}>
            {this.renderMenus(menu.children)}
          </SubMenu>
        );
      } else {
        return (
          <Menu.Item
            key={menu._id}
            icon={<DesktopOutlined />}
            onClick={() => this.loadingComponent(menu)}
          >
            {menu.name}
          </Menu.Item>
        );
      }
    });
  };

  // 加载组件
  loadingComponent = (menu) => {
    this.props.history.push(menu.path);
    this.setState({
      routes: {
        path: menu.path,
        component: lazy(() => import(`../../${menu.component.toLowerCase()}`)),
      },
    });
  };

  // 渲染组件
  renderComponent = () => {
    const { routes } = this.state;
    return <Route path={routes.path} component={routes.component} />;
  };

  onCollapse = (collapsed) => {
    this.setState({ collapsed });
  };

  async componentDidMount() {
    this.setState({ menuLoading: true });
    // 发送请求，请求用户菜单和用户信息
    await this.props.getUserInfoAsync();
    this.setState({ menuLoading: false });
  }

  render() {
    const { menuLoading } = this.state;
    const userInfo = this.props.userInfo;
    const menu = (
      <Menu>
        <Menu.Item key="0">
          <span>修改密码</span>
        </Menu.Item>
        <Menu.Divider />
        <Menu.Item key="3">退出登录</Menu.Item>
      </Menu>
    );
    // 面包屑参数
    const breadCrumbProps = {};
    const { collapsed } = this.state;
    const logoCx = cx('logo', { collapsed: collapsed });
    return (
      <Layout style={{ minHeight: '100vh' }}>
        <Sider collapsible collapsed={collapsed} onCollapse={this.onCollapse}>
          <div className={logoCx}>
            <img src={logo} alt="logo" />
            <span className="animate__animated animate__bounce">惠惠子</span>
          </div>
          {menuLoading ? (
            <Spin tip="惠惠子拼命加载中..." />
          ) : (
            <Menu theme="dark" mode="inline">
              {/* 渲染左侧菜单 */}
              {this.renderMenus(userInfo.menus)}
            </Menu>
          )}
        </Sider>
        <Layout className="site-layout">
          <Header className="site-layout-header">
            <FullscreenOutlined className="fullscreen" />
            <img src={userInfo.avatar} alt="avatar" />
            <Dropdown overlay={menu} trigger={['click']} arrow>
              <span className="userName">
                {userInfo.userName} <DownOutlined />
              </span>
            </Dropdown>
          </Header>
          <Content style={{ margin: '0 16px' }}>
            <CursomBreadcrumb {...breadCrumbProps} />
            {/* 渲染组件 */}
            <Suspense
              fallback={<Spin size="large" tip="惠惠子拼命加载中..." />}
            >
              {this.renderComponent()}
            </Suspense>
          </Content>
        </Layout>
      </Layout>
    );
  }
}
export default AuthLayout;
