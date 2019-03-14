import { currentPath } from '_util/path'
import { getList, getDetail } from './service'
import modelExtend from 'dva-model-extend'
import commonModel from '_models/commonModel'

const MODEL_NAME = 'app'
const PATH = '/apps'

export default modelExtend(commonModel, {
    namespace: MODEL_NAME,
    state: {
        dataSource: [],
    },
    subscriptions: {
        setup: currentPath(PATH, (dispatch, location) => {
            dispatch({
                type: 'init',
                location
            })
        })
    },
    reducers: {
        'delete'(state, { payload: id }) {
            return state.filter(item => item.id !== id);
        },
    },
    effects: {
        *init({ location }, { select, put, call }) {
            console.log('进入文章页面', location)
            const res = yield call(getList, {
                page: location.query.page || '1',
                page_size: location.query.pageSize || '10'
            })
            console.log('res', res)

            yield put({
                type: 'setState',
                payload: {
                    dataSource: res.data,
                    _pagination: {
                        total: res.headers['x-total'] ? parseInt(res.headers['x-total']) : 0
                    }
                },
            })
        },
        *getDetail({ location, payload }, { select, put, call }) {
            console.log('getDetail', payload.id)
            const res = yield call(getDetail, {
                id: payload.id,
                convert: true
            })
            console.log('res', res)

            yield put({
                type: 'setState',
                payload: {
                    detail: res.data,
                },
            })
        },
    }
})

