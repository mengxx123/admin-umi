import {currentPath} from '_util/path'
import {doit} from '../service/about'
import modelExtend from 'dva-model-extend'
import commonModel from './commonModel'

export default modelExtend(commonModel, {
  namespace: 'article',
  state: {
    dataSource: [],
    aboutText: '这是关于'
  },
  subscriptions: {
    setup: currentPath('/articles', (dispatch, location) => {
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
    *init ({location}, {select, put, call}) {
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
  }
})

