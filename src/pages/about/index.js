import { connect } from 'dva'
import { withRouter, Link } from 'dva/router'
import { Breadcrumb } from 'antd'

const About = ({ dispatch, _model }) => {
    console.log('about', _model)

    return (
        <div>
            <Breadcrumb>
                <Breadcrumb.Item>
                    <Link to='/'>首页</Link>
                </Breadcrumb.Item>
                <Breadcrumb.Item>关于</Breadcrumb.Item>
            </Breadcrumb>
            这是关于页面
        </div>
    );
};

export default connect(({ about: _model }) => ({
    _model,
}))(About)
