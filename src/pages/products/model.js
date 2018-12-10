import {currentPath} from '_util/path'
import {doit} from './service'
import modelExtend from 'dva-model-extend'
import commonModel from '_models/commonModel'

const PATH = '/products'

export default modelExtend(commonModel, {
  namespace: 'product',
  state: {
    keyword: '12',
    dataSource: [],

    pagination: {
      current: 1,
      total: 1,
      pageSize: 20
    },

    aboutText: '这是关于'
  },
  subscriptions: {
    setup: currentPath(PATH, (dispatch, location) => {
      // dispatch({
      //   type: 'init'
      // })
      dispatch({
        type: 'queryList',
        location,
      })
    })
  },
  reducers: {
    'delete'(state, { payload: id }) {
      return state.filter(item => item.id !== id);
    },
  },
  effects: {
    *queryList({location}, {select, put, call}) {

      const {page = 1, pageSize = 20, keyword} = location.query

      console.log('进入文章页面')
      let requestData = {
        page: page,
        page_size: pageSize
      }
      if (keyword) {
        requestData.keyword = keyword
      }
      const data = yield call(doit, requestData)
      console.log('data', data)
      let total = data.headers['x-total']
      let totalPage = data.headers['x-total-page']
      
      yield put({
        type: 'setState',
        payload: {
          pagination: {
            current: page,
            total: total,
            pageSize
          },
          dataSource: data.data,
        },
      })
    },
  }
})

