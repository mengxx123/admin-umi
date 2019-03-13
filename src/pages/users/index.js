import { connect } from 'dva'
import { Table } from 'antd'

const MODEL_NAME = 'article'

const Index = ({ dispatch, _model }) => {
  const {dataSource} = _model

  const columns = [
    {
      title: '标题',
      dataIndex: 'title',
    },
    {
      title: '内容类型',
      dataIndex: 'contentType',
    },
    {
      title: '置顶',
      dataIndex: 'top',
    },
    {
      title: '标签',
      dataIndex: 'tags',
    },
    {
      title: '创建者',
      dataIndex: 'user.name',
    },
    {
      title: '创建时间',
      dataIndex: 'createTime',
    },
    {
      title: '更新时间',
      dataIndex: 'updateTime',
    },
  ]

  return (
    <div>
      <h2>文章列表</h2>
      <Table
        dataSource={dataSource}
        columns={columns}
      />
    </div>
  );
};

export default connect(({ [MODEL_NAME]: _model }) => ({
  _model,
}))(Index)
