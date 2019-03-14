import { currentPath } from '_util/path'
import { doit } from '../service/account'
import modelExtend from 'dva-model-extend'
import commonModel from './commonModel'

const MODEL_NAME = 'account'

export default modelExtend(commonModel, {

    namespace: MODEL_NAME,
    
    state: {
        dataSource: [],
    },
    subscriptions: {
        setup: currentPath('/accounts', (dispatch, location) => {
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
            console.log('进入文章页面')
            const res = yield call(doit, {
                anum: 1
            })
            console.log('res', res)
            if (res.status !== 200) {
                message.error(res.data.msg)
                return
            }
            yield put({
                type: 'setState',
                payload: {
                    dataSource: res.data,
                },
            })
        },
    }
})

