import { connect } from 'dva'
import { Table } from 'antd'
import {routerRedux, browserHistory} from 'dva/router'
import qs from 'qs'
import TableLayout from '_components/TableLayout'
import {commonTime} from '_util/filter'

const MODEL_NAME = 'shop'

const Index = ({ dispatch, _model }) => {
  const {dataSource, pagination} = _model

  const columns = [
    {
      title: '名称',
      dataIndex: 'name',
    },
    {
      title: '编号',
      dataIndex: 'code',
    },
    {
      title: '创建时间',
      dataIndex: 'createTime',
      render: commonTime()
    },
    {
      title: '更新时间',
      dataIndex: 'updateTime',
      render: commonTime()
    },
  ]

  const layoutProps = {
    _model,
    dispatch,
    columns
  }

  return (
    <div>
      <h2>商品列表</h2>
      <TableLayout {...layoutProps} />
    </div>
  );
};

export default connect(({ [MODEL_NAME]: _model, location}) => ({
  location,
  _model,
}))(Index)
