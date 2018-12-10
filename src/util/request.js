import axios from "axios"

async function request (options) {
    let response
    try {
        response = await axios(options)
        return response
    } catch (err) {
        return response
    }
}

module.exports = {
  request,
}