import { request } from '_util/request'
import http from '_util/http'

function getList(params) {
    return http({
        method: 'get',
        url: `https://nodeapi.yunser.com/users`,
        // data: JSON.stringify(body),
        params
    })
}

module.exports = {
    getList,
}