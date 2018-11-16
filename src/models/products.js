export default {
  namespace: 'products',
  state: [
    {
      id: '1',
      title: '呵呵'
    },
    {
      id: '1',
      title: '哈哈'
    }
  ],
  reducers: {
    'delete'(state, { payload: id }) {
      return state.filter(item => item.id !== id);
    },
  },
};