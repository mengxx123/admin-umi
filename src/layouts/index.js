import styles from './index.css';
import { Layout, Menu, Breadcrumb, Icon, Dropdown } from 'antd'
import { withRouter, Link } from 'dva/router'

const {Header, Footer, Sider, Content} = Layout
const { SubMenu } = Menu

class BasicLayout extends React.Component {

  state = {
    collapsed: false,
  }

  toggle = () => {
    this.setState({
      collapsed: !this.state.collapsed,
    })
  }

  render() {
    if (this.props.location.pathname === '/login') {
      return (
        <div className={styles.simpleWrap}>
          { this.props.children }
        </div>
      )
    }

    const menu = (
      <Menu>
        <Menu.Item>
          <a target="_blank" rel="noopener noreferrer" href="http://www.alipay.com/">1st menu item</a>
        </Menu.Item>
        <Menu.Item>
          <a target="_blank" rel="noopener noreferrer" href="http://www.taobao.com/">2nd menu item</a>
        </Menu.Item>
        <Menu.Item>
          <a target="_blank" rel="noopener noreferrer" href="http://www.tmall.com/">3rd menu item</a>
        </Menu.Item>
      </Menu>
    )

    return (
      <div className={styles.wrap}>
        <Layout className={styles.layoutWrap}>
          <Sider
            trigger={null}
            collapsible
            collapsed={this.state.collapsed}>
            <div className={styles.logo} />
            <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
              <Menu.Item key="1">
                <Icon type="user" />
                <span>
                  <Link to='/articles'>文章管理</Link>
                </span>
              </Menu.Item>
              <Menu.Item key="2">
                <Icon type="video-camera" />
                <span>
                  <Link to='/products'>商品管理</Link>
                </span>
              </Menu.Item>
              <Menu.Item key="3">
                <Icon type="video-camera" />
                <span>
                  <Link to='/shops'>店铺管理</Link>
                </span>
              </Menu.Item>
              {/* <Menu.Item key="2">
                <Icon type="video-camera" />
                <span>nav 2</span>
                <SubMenu key="sub1" title={<span><Icon type="user" />subnav 1</span>}>
                  <Menu.Item key="1">option1</Menu.Item>
                  <Menu.Item key="2">option2</Menu.Item>
                  <Menu.Item key="3">option3</Menu.Item>
                  <Menu.Item key="4">option4</Menu.Item>
                </SubMenu>
              </Menu.Item> */}
              <Menu.Item key="3">
                <Icon type="upload" />
                <span>nav 3</span>
              </Menu.Item>
            </Menu>
          </Sider>
          <Layout>
            <Header className={styles.header}>
              <div className={styles.left}>
                <Icon
                  className="trigger"
                  type={this.state.collapsed ? 'menu-unfold' : 'menu-fold'}
                  onClick={this.toggle}
                />
                <Menu
                  theme="dark"
                  mode="horizontal"
                  defaultSelectedKeys={['2']}
                  style={{ lineHeight: '64px' }}
                  >
                  <Menu.Item>
                    <Link to='/'>首页</Link>
                  </Menu.Item>
                  <Menu.Item>
                    <Link to='/about'>关于</Link>
                  </Menu.Item>
                  <Menu.Item>
                    <Link to='/articles'>文章管理</Link>
                  </Menu.Item>
                  <Menu.Item>
                    1223
                  </Menu.Item>
                </Menu>
              </div>
              <div className={styles.right}>
                <Dropdown overlay={menu}>
                  <a className="ant-dropdown-link" href="#">
                    Hover me <Icon type="down" />
                  </a>
                </Dropdown>
              </div>
            </Header>
            <Content className={styles.content}>
              {/* <Breadcrumb style={{ margin: '16px 0' }}>
                <Breadcrumb.Item>Home</Breadcrumb.Item>
                <Breadcrumb.Item>List</Breadcrumb.Item>
                <Breadcrumb.Item>App</Breadcrumb.Item>
              </Breadcrumb> */}
              <div style={{ background: '#fff', padding: 24, minHeight: 280 }}>
                { this.props.children }
              </div>
            </Content>
            <Footer style={{ textAlign: 'center' }}>
              ©2018 Yunser
            </Footer>
          </Layout>
        </Layout>
      </div>
    )
  }
}

export default BasicLayout
