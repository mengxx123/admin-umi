// import {request} from '_util/request'
import request from '_util/http'
import config from '_config'

function getList(params) {
    return request({
        method: 'get',
        url: `/apps`,
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
  