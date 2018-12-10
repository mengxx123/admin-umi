const currentPath = (path, fn) => {
  return ({dispatch, history}) => {
    return history.listen((location) => {
      if (location.pathname === path) {
        fn(dispatch, location)
      }
    })
  }
}

module.exports = {
  currentPath,
}