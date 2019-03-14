// import {request} from '_util/request'
import request from '_util/http'

function doit(body) {
    return request({
        method: 'get',
        url: `https://nodeapi.yunser.com/u/blog/articles`,
        data: JSON.stringify(body),
    })
}

module.exports = {
    doit,
}