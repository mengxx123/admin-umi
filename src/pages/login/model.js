import { currentPath } from '_util/path'
import storage from '_util/storage'
import { login } from '_services/auth'
import modelExtend from 'dva-model-extend'
import commonModel from '_models/commonModel'
import { message } from 'antd'
import router from 'umi/router'

export default modelExtend(commonModel, {

    namespace: 'login',

    state: {
        dataSource: [],
        aboutText: '这是关于',
        form: {
            account: '1418503647@qq.com',
            password: '1234'
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
        *login({ location, payload }, { select, put, call }) {
            const res = yield call(login, {
                account: payload.account,
                password: payload.password
            })
            console.log('返回 res', res)
            if (res.status !== 200) {
                message.error(res.data.msg)
                return
            }
            message.success('登录成功')

            sessionStorage.setItem('isLogin', 'true')
            storage.set('accessToken', res.data.accessToken)
            storage.set('user', res.data.user)

            router.push('/')
            // yield put({
            //     type: 'setState',
            //     payload: {
            //         dataSource: data.data,
            //     },
            // })
        },
    }
})

