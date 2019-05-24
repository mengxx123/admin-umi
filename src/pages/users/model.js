import { currentPath } from '_util/path'
import { defaultPageSize } from '_util/page'
import { getList } from '_services/user'
import modelExtend from 'dva-model-extend'
import commonModel from '_models/commonModel'

const NS_USER = 'user'

export default modelExtend(commonModel, {
    namespace: NS_USER,

    state: {
        dataSource: [],
    },
    subscriptions: {
        setup: currentPath('/users', (dispatch, location) => {
            console.log('location', location)
            dispatch({
                type: 'init',
            })
        })
    },
    reducers: {
        'delete'(state, { payload: id }) {
            return state.filter(item => item.id !== id);
        },
    },
    effects: {
        *init({}, { select, put, call }) {
            console.log('===defaultPageSize', defaultPageSize)
            const data = yield call(getList, {
                page: window.__locationQuery.page || 1,
                page_size: window.__locationQuery.pageSize || defaultPageSize
            })
            console.log('data222', data)
            yield put({
                type: 'setState',
                payload: {
                    dataSource: data.data,
                    _pagination: {
                        total: data.headers['x-total'] ? parseInt(data.headers['x-total']) : 0
                    }
                },
            })
        },
    }
})

