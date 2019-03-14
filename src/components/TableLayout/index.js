import { connect } from 'dva'
import { Table, Button, Input } from 'antd'
import { routerRedux, browserHistory } from 'dva/router'
import qs from 'qs'
import styles from './index.scss'
import { Breadcrumb } from 'antd'
import { withRouter, Link } from 'dva/router'
import { goToFilterURL } from '_util/help'

const Search = Input.Search

class Index extends React.Component {

    render() {
        const { _model, location, dispatch, columns } = this.props

        const { dataSource, _pagination, keyword } = _model

        this.index = 0
        let newColumns = columns.map(item => {
            return {
                key: this.index++,
                ...item
            }
        })

        function onShowSizeChange(current, pageSize) {
            console.log(current, pageSize);
        }

        console.log('newColumns', location)
        let tableProps = {
            columns: newColumns,
            dataSource,
            pagination: {
                current: (location.query && location.query.page) ? parseInt(location.query.page) : 1,
                total: _pagination ? _pagination.total : 10
            },
            showTotal: total => `Total ${total} items`,
            showSizeChanger: true,
            onShowSizeChange: onShowSizeChange,
            // scroll: { y: 560 },
            onChange(page, pageSize) {
                console.log('change', page)
                goToFilterURL({
                    page: page.current
                })
            },
            rowKey: 'id',
        }

        function onCreate() {

        }

        function onChange(e) {
            console.log('change', e)
        }

        function onSearch(value) {
            goToFilterURL(dispatch, {
                keyword: value
            })
        }

        return (
            <div>
                <div className={styles.action}>
                    <Button type="primary" onClick={e => onCreate()}>新增</Button>
                    <Search defaultValue={keyword} className={styles.search} placeholder="搜索"
                        onChange={e => onChange(e)}
                        onSearch={value => onSearch(value)} />
                </div>
                <div className={styles['table-box']}>
                    <Table {...tableProps} />
                </div>
            </div>
        )
    }
}

export default Index
