// import {request} from '_util/request'
import request from '_util/http'

function getList(params) {
    return request({
        method: 'get',
        url: `https://nodeapi.yunser.com/apps`,
        params
    })
}

function getDetail(params) {
    console.log('params', params)
    return request({
        method: 'get',
        url: `https://nodeapi.yunser.com/apps/${params.id}`,
        params
    })
}

module.exports = {
    getList,
    getDetail
}

// export async function getList(params) {
//     return request({
//         method: 'get',
//         url: `https://nodeapi.yunser.com/apps`,
//         params
//     })
// }

// export async function getDetail(params) {
//     return request({
//         method: 'get',
//         url: `https://nodeapi.yunser.com/apps/${params.id}`,
//         params
//     })
// }
  