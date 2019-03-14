import { connect } from 'dva'
import { Table } from 'antd'
import Breadcrumb from '_components/Breadcrumb'

import router from 'umi/router'

const MODEL_NAME = 'article'

class ArticleDetail extends React.Component {

    componentWillMount() {
        const { location, dispatch, columns } = this.props
        
        console.log('this.props.match.params', this.props.match.params)
        dispatch({
            type: 'article/getDetail',
            payload: {
                id: this.props.match.params.id,
                convert: true,
            }
        });
    }

    render() {
        const { _model } = this.props
        const { detail } = _model

        if (!detail) {
            return <div></div>
        }

        const breadcrumbProps = {
            data: [
                {
                    text: '文章管理',
                    url: '/articles'
                },
                {
                    text: detail.title,
                }
            ]
        }
    
        return (
            <div>
                <Breadcrumb {...breadcrumbProps} />
                <div className={styleMedia.title}>{detail.title}</div>
                {/* 文章详情 */}
                <div dangerouslySetInnerHTML={{__html: detail.content}}></div>
            </div>
        )
    }
}

export default connect(({ [MODEL_NAME]: _model }) => ({
    _model,
}))(ArticleDetail)
