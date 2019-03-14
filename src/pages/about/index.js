import { connect } from 'dva'
import { withRouter, Link } from 'dva/router'
import { Breadcrumb } from 'antd'

const About = ({ dispatch, _model }) => {
    console.log('about', _model)
    const { tableList } = _model

    function handleDelete(id) {
        dispatch({
            type: 'products/delete',
            payload: id,
        });
    }
    return (
        <div>
            <Breadcrumb>
                <Breadcrumb.Item>
                    <Link to='/'>首页</Link>
                </Breadcrumb.Item>
                <Breadcrumb.Item>关于</Breadcrumb.Item>
            </Breadcrumb>
        </div>
    );
};

export default connect(({ about: _model }) => ({
    _model,
}))(About)
