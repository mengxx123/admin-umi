import { request } from '_util/request'
import http from '_util/http'

function getList(params) {
    return http({
        method: 'get',
        url: `/apps/1/users`,
        // data: JSON.stringify(body),
        params
    })
}

module.exports = {
    getList,
}
