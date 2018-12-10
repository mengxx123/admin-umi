import { connect } from 'dva'
import { Table, Button, Input } from 'antd'
import {routerRedux, browserHistory} from 'dva/router'
import qs from 'qs'
import styles from './index.scss'

const Search = Input.Search

function goToFilterURL(dispatch, obj) {
  console.log('obj', obj)
  let {pathname, search} = window.location
  let locationQuery = qs.parse(search.substring(1))
  console.log('locationQuery', locationQuery)
  let query = {
    ...locationQuery,
    ...obj,
  }
  let path = `${pathname}?${qs.stringify(query)}`
  console.log(path)
  console.log('routerRedux', routerRedux)
  routerRedux.push(path)
  dispatch(routerRedux.push(path));
}

class Index extends React.Component {
  render() {
    const {_model, dispatch, columns} = this.props

    const {dataSource, pagination, keyword} = _model

    this.index = 0
    let newColumns = columns.map(item => {
      return {
        key: this.index++,
        ...item
      }
    })

    console.log('newColumns', newColumns)
    let tableProps = {
      columns: newColumns,
      dataSource,
      pagination: pagination,
      // scroll: { y: 340 },
      onChange(page, pageSize) {
        goToFilterURL(dispatch, {
          page: page.current
        })
      }
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
        <Table {...tableProps} />
      </div>
    )
  }
}

export default Index
