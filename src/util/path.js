const currentPath = (path, fn) => {
    return ({ dispatch, history }) => {
        return history.listen((location) => {
            if (location.pathname === path) {
                window.__locationQuery = location.query
                fn(dispatch, location)
            }
        })
    }
}

module.exports = {
    currentPath,
}
