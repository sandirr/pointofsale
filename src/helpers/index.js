const crypto = require('crypto')

module.exports = {
    generateSalt: (length) => {
        return crypto.randomBytes(Math.ceil(length / 2)).toString('hex').slice(0, length)
    },
    setPassword: (password, salt) => {
        const hash = crypto.createHmac('sha512', salt)
        hash.update(password)
        const value = hash.digest('hex')
        return {
            salt: salt,
            passwordHash: value
        }
    },
    response: (response, status, result, pagination) => {
        var page = []
        var data = {}

        if(pagination){

            for (var i = 1; i <= pagination.totalPages; i++) {
                page[i-1] = i
            }
            data.totalPages = page
        }

        data.status = status || 200
        data.result = result

        return response.status(data.status).json(data)
    },
    customErrorResponse: (response, status, message) => {
        const result = {}

        result.status = status || 400
        result.message = message

        return response.status(result.status).json(result)
    }
}
