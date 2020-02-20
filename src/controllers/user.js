const JWT = require('jsonwebtoken')
const userModel = require('../models/user')
const helper = require('../helpers')
const { JWT_KEY } = require('../configs')

module.exports = {
    register: async (req, res) => {
        try {
            const salt = helper.generateSalt(18)
            const hashPassword = helper.setPassword(req.body.password, salt)
            const data = {
                name: req.body.name,
                email: req.body.email,
                salt: hashPassword.salt,
                password: hashPassword.passwordHash,
                created_at: new Date(),
                updated_at: new Date()
            }
            const result = await userModel.register(data)
            helper.response(res, 200, 'user has been added')
        } catch (error) {
            console.log(error)
            helpers.customErrorResponse(res, 500, 'Failed')
        }
    },
    login: async (request, response) => {
        const data = {
            password: request.body.password,
            email: request.body.email
        }

        const emailValid = await userModel.checkEmail(data.email)
        const dataUser = emailValid[0]
        const hashPassword = helper.setPassword(data.password, dataUser.salt)

        if (hashPassword.passwordHash === dataUser.password) {
            const token = JWT.sign({
                email: dataUser.email,
                id: dataUser.id
            }, JWT_KEY, { expiresIn: '1d' })

            delete dataUser.salt
            delete dataUser.password

            dataUser.token = token
            helper.response(response, 200, dataUser)
        } else {
            response.json({ message: 'Login error!' })
        }
    }
}
