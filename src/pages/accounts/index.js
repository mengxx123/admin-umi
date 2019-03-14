import { connect } from 'dva'
import { Table } from 'antd'
import moment from 'moment'
import TableLayout from '_components/TableLayout'
import Breadcrumb from '_components/Breadcrumb'
import { commonTime } from '_util/filter'

const MODEL_NAME = 'account'

const Index = ({ dispatch, _model }) => {
    const { dataSource } = _model

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
            render: commonTime
        },
        {
            title: '更新时间',
            dataIndex: 'updateTime',
            render: commonTime
        },
    ]

    const layoutProps = {
        _model,
        dispatch,
        columns
    }
    const breadcrumbProps = {
        data: [
            {
                text: '123',
                url: ''
            },
            {
                text: '123',
                url: ''
            }
        ]
    }

    return (
        <div>
            <Breadcrumb {...breadcrumbProps} />
            <TableLayout {...layoutProps} />
        </div>
    );
};

export default connect(({ [MODEL_NAME]: _model }) => ({
    _model,
}))(Index)
