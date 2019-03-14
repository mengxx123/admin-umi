// import { request } from '_util/request'
import request from '_util/http'

function login(body) {
    return request({
        method: 'post',
        url: `https://nodeapi.yunser.com/login`,
        data: JSON.stringify(body),
        headers: {
            'Content-Type': 'application/json'
        }
    })
}

module.exports = {
    login,
}
