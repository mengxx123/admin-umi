import { connect } from 'dva'
import { Table } from 'antd'

import router from 'umi/router'

const MODEL_NAME = 'user'

const Index = ({ dispatch, _model }) => {
    const { dataSource } = _model

    return (
        <div>
            用户详情
        </div>
    );
};

export default connect(({ [MODEL_NAME]: _model }) => ({
    _model,
}))(Index)
