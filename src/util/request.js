import axios from "axios"

const instance = axios.create({
    // baseURL: 'https://nodeapi.yunser.com'
    baseURL: 'http://localhost:1026'
})

async function request(options) {
    let response
    try {
        response = await instance(options)
        return response
    } catch (err) {
        return response
    }
}

module.exports = {
  request,
}