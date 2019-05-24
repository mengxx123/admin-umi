import { connect } from 'dva'
import AdminRow from '../components/AdminRow'
import { withRouter, Link } from 'dva/router'
import { Layout, Menu, Breadcrumb, Row, Col, Card  } from 'antd'
const {
    Header, Footer, Sider, Content,
} = Layout

const Products = ({ dispatch, products }) => {
    function handleDelete(id) {
        dispatch({
            type: 'products/delete',
            payload: id,
        });
    }
    return (
        <div>
            <AdminRow>
                <Col span={12}>
                    <Card title="卡片标题">卡片内容</Card>
                </Col>
                <Col span={12}>
                    <Card title="卡片标题">卡片内容</Card>
                </Col>
            </AdminRow>
            <AdminRow>
                <Col span={8}>
                    <Card title="卡片标题">卡片内容</Card>
                </Col>
                <Col span={8}>
                    <Card title="卡片标题">卡片内容</Card>
                </Col>
                <Col span={8}>
                    <Card title="卡片标题">卡片内容</Card>
                </Col>
            </AdminRow>
        </div>
    )
}

export default connect(({ products }) => ({
    products,
}))(Products)
