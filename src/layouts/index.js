import styles from './index.css';
import { Layout, Menu, Breadcrumb, Icon, Dropdown, LocaleProvider } from 'antd'
import { withRouter, Link } from 'dva/router'
import zh_CN from 'antd/lib/locale-provider/zh_CN'
import router from 'umi/router'
import './index.css'

const { Header, Footer, Sider, Content } = Layout
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
                    {this.props.children}
                </div>
            )
        } else {
            let isLogin = sessionStorage.getItem('isLogin')
            console.log('isLogin', isLogin)
            if (isLogin !== 'true') {
                router.push('/login')
            }
        }

        function loginOut() {
            sessionStorage.setItem('isLogin', false)
        }

        const menu = (
            <Menu>
                <Menu.Item>
                    <a href="#" onClick={loginOut}>退出登录</a>
                </Menu.Item>
                <Menu.Item>
                    <a target="_blank" rel="noopener noreferrer" href="http://www.taobao.com/">2nd menu item</a>
                </Menu.Item>
                <Menu.Item>
                    <a target="_blank" rel="noopener noreferrer" href="http://www.tmall.com/">3rd menu item</a>
                </Menu.Item>
            </Menu>
        )

        let leftMenus = [
            {
                title: '文章管理',
                url: '/articles',
                icon: 'user',
            },
            {
                title: '关于',
                url: '/about',
                icon: 'user',
            },
            {
                title: '应用管理',
                url: '/apps',
                icon: 'user',
            },
            {
                title: '用户管理',
                url: '/users',
                icon: 'user',
            },
            {
                title: '账号管理',
                url: '/accounts',
                icon: 'user',
            },
        ]

        const MyMenuItem = (item, index) => {
            return (
                <Menu.Item key={index}>
                    <Icon type={item.icon} />
                    <span>
                        <Link to={item.url}>{item.title}</Link>
                    </span>
                </Menu.Item>
            )
        }
        return (
            <div className={styles.wrap}>
                <LocaleProvider locale={zh_CN}>
                    <Layout className={styles.layoutWrap}>
                        <Sider
                            trigger={null}
                            collapsible
                            collapsed={this.state.collapsed}>
                            <div className={styles.logo} />

                            <Menu theme="light" mode="inline">
                                {leftMenus.map(MyMenuItem)}
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
                                        // theme="dark"
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

                                        {/* <Menu.Item>
                                            <Link to='/login'>登录</Link>
                                        </Menu.Item> */}
                                    </Menu>
                                </div>
                                <div className={styles.right}>
                                    <Dropdown overlay={menu}>
                                        <a className="ant-dropdown-link" href="#">
                                            更多 <Icon type="down" />
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
                                    {this.props.children}
                                </div>
                            </Content>
                            <Footer style={{ textAlign: 'center' }}>
                                ©2018 Yunser
                </Footer>
                        </Layout>
                    </Layout>
                </LocaleProvider>;
            </div>
        )
    }
}

export default BasicLayout
