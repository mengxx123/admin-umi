import {request} from '_util/request'
import qs from 'qs'

function doit(data) {
  console.log('doit data', data)
  return request({
    method: 'get',
    url: `/shop/products?${qs.stringify(data)}`,
  })
}

module.exports = {
  doit,
}