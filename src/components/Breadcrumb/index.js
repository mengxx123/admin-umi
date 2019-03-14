import { connect } from 'dva'
import { Table, Button, Input } from 'antd'
import { routerRedux, browserHistory } from 'dva/router'
import qs from 'qs'
import styles from './index.scss'
import { Breadcrumb } from 'antd'
import { withRouter, Link } from 'dva/router'

console.log('styles', styles)
const Search = Input.Search

class Index extends React.Component {

    render() {
        const { data } = this.props

        // return <div></div>
        
        // const {dataSource, pagination, keyword} = _model
        return (
            <div>
                <Breadcrumb className={styles['admin-breadcrumb']}>
                    <Breadcrumb.Item>
                        <Link to="/">首页</Link>
                    </Breadcrumb.Item>
                    {data.map((item, index) => {
                        if (item.url) {
                            return <Breadcrumb.Item>
                                <Link to={item.url}>{item.text}</Link>
                            </Breadcrumb.Item>
                        }
                        return <Breadcrumb.Item>
                            {item.text}
                            {/* <Link to='/articles'></Link> */}
                        </Breadcrumb.Item>
                    })}
                    {/* <Breadcrumb.Item>文章列表</Breadcrumb.Item> */}
                </Breadcrumb>
            </div>
        )
    }
}

export default Index
