// import {request} from '_util/request'
import request from '_util/http'

function doit(body) {
    return request({
        method: 'get',
        url: `https://nodeapi.yunser.net/users/2/records?page_size=9999`,
        // url: `https://nodeapi.yunser.com/password/users/1/account`,
        data: JSON.stringify(body),
    })
}

module.exports = {
    doit,
}