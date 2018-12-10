import {request} from '_util/request'

function doit(body) {
  return request({
    method: 'get',
    url: `https://nodeapi.yunser.com/u/blog/articles?page_size=20&page=1`,
    data: JSON.stringify(body),
  })
}

module.exports = {
  doit,
}