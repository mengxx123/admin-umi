// 所有的 model 都继承这
export default {
    state: {
    },
    effects: {
    },
    reducers: {
        setState(state, action) {
            return { ...state, ...action.payload }
        },
        fetch(state, action) {
            return { ...state, ...action.payload }
        },
    },
}
