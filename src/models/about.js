import {currentPath} from '_util/path'
import {doit} from '../service/about'

export default {
  namespace: 'about',
  state: {
    aboutText: '这是关于'
  },
  subscriptions: {
    setup: currentPath('/about', (dispatch, location) => {
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
      console.log('进入关于页面')
      const { data } = yield call(doit, {
        anum: 1
      })
      console.log('data', data)
    },
  }
}
