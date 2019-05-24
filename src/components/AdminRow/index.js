import { Row } from 'antd'

class AdminRow extends React.Component {

    render() {
        return <Row className="admin-row" gutter={16}>
            {this.props.child}
        </Row>
    }
}

export default AdminRow
