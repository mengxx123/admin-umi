// import {request} from '_util/request'
import request from '_util/http'

function doit(params) {
    return request({
        method: 'get',
        url: `https://nodeapi.yunser.com/u/blog/articles`,
        params
    })
}

function getDetail(params) {
    console.log('params', params)
    return request({
        method: 'get',
        url: `https://nodeapi.yunser.com/articles/${params.id}`,
        params
    })
}

module.exports = {
    doit,
    getDetail
}