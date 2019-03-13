import { currentPath } from '_util/path'
import { login } from '../service/auth'
import modelExtend from 'dva-model-extend'
import commonModel from './commonModel'

export default modelExtend(commonModel, {
    namespace: 'login',
    state: {
        dataSource: [],
        aboutText: '这是关于',
        form: {
            account: 'cjh',
            password: '123456'
        }
    },
    subscriptions: {
        setup: currentPath('/users', (dispatch, location) => {
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
            const data = yield call(doit, {
                anum: 1
            })
            console.log('data', data)
            yield put({
                type: 'setState',
                payload: {
                    dataSource: data.data,
                },
            })
        },
        *deleteModel({ location, payload }, { select, put, call }) {
            console.log('deleteModel', payload)
            const data = yield call(login, {
                account: payload.account,
                password: payload.password
            })
            console.log('返回data', data)
            // yield put({
            //     type: 'setState',
            //     payload: {
            //         dataSource: data.data,
            //     },
            // })
        },
    }
})

