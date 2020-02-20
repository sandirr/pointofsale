const JWT = require('jsonwebtoken')
const { JWT_KEY } = require('../configs')

module.exports = {
    authentication: (request, response, next) => {
        const headerToken = request.headers.token
        const userId = request.headers['user-id']
        console.log(userId)
        if (headerToken === undefined) {
            response.json({ message: 'Please provide Token!' })
        } else {
            request.token = headerToken
            request.userId = userId
            next()
        }
    },
    authorization: (request, response, next) => {
        const token = request.token
        const userId = request.userId
        JWT.verify(token, JWT_KEY, (error, decoded) => {
            if (error && error.name === 'TokenExpiredError') response.json({ message: 'Token Expired!' })
            if (error && error.name === 'JsonWebTokenError') response.json({ message: 'Token Error!' })
            if (parseInt(userId) !== parseInt(decoded.id)) response.json({ message: 'You\'re Unauthorized!' })
            next()
        })
    }
}
