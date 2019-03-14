import { currentPath } from '_util/path'
import { getList } from '_services/user'
import modelExtend from 'dva-model-extend'
import commonModel from '_models/commonModel'

export default modelExtend(commonModel, {
    namespace: 'user',
    state: {
        dataSource: [],
        aboutText: '这是关于'
    },
    subscriptions: {
        setup: currentPath('/users', (dispatch, location) => {
            console.log('location', location)
            dispatch({
                type: 'init'
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
            console.log('进入用户页面', location)

            const data = yield call(getList, {
                page: 1,
                page_size: 10
            })
            console.log('data', data)
            yield put({
                type: 'setState',
                payload: {
                    dataSource: data.data,
                },
            })
        },
    }
})

