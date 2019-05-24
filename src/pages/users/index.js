import { connect } from 'dva'
import { Table } from 'antd'
import { goToFilterURL } from '_util/help'
import router from 'umi/router'
import Breadcrumb from '_components/Breadcrumb'
const MODEL_NAME = 'user'
import TableLayout from '_components/TableLayout'

const Index = ({ dispatch, _model }) => {
    const { dataSource } = _model

    console.log('用户数据', _model)

    const columns = [
        {
            title: '用户名',
            dataIndex: 'name',
            render: (text, item) => {
                return <a onClick={() => router.push(`/users/${item.id}`)}>{text}</a>
            },
        },
        {
            title: '邮箱',
            dataIndex: 'email',
        },
        {
            title: '电话',
            dataIndex: 'phone',
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

    const layoutProps = {
        _model,
        dispatch,
        location,
        columns
    }

    const tableProps = {
        pagination: {
            defaultCurrent: 2,
            pageSize: 10,
            total: 500,
            onChange(page, pageSize) {
                goToFilterURL(dispatch, {
                    page: page.current
                })
            }
        }
    }
    const breadcrumbProps = {
        data: [
            {
                text: '用户管理',
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
