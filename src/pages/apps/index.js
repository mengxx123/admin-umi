import { connect } from 'dva'
import { Switch, Tag } from 'antd'
import TableLayout from '_components/TableLayout'
import Breadcrumb from '_components/Breadcrumb'
import { commonTime, oneRow } from '_components/tableCeil'
import router from 'umi/router'

const MODEL_NAME = 'app'

const Index = ({ dispatch, _model, location }) => {
    const { dataSource } = _model

    const columns = [
        {
            title: '名称',
            dataIndex: 'name',
            width: 200,
            // render: oneRow
            render: (text, item) => {
                return <a onClick={() => router.push(`/apps/${item.id}`)}>{text}</a>
            },
        },
        {
            title: '简介',
            dataIndex: 'description',
        },
        {
            title: '密钥',
            dataIndex: 'secretKey',
        },
        {
            title: '网站',
            dataIndex: 'website',
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
        location,
        columns
    }
    const breadcrumbProps = {
        data: [
            {
                text: '应用管理',
            },
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
