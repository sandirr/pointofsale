const JWT = require('jsonwebtoken')
const userModel = require('../models/user')
const helper = require('../helpers')
const { JWT_KEY } = require('../configs')

module.exports = {
    users: async (req,res)=>{
        try{
            const result = await userModel.getUsers()
            helper.response(res, 200, result)
        } catch(error){
            helpers.customErrorResponse(res, 500, 'Failed')
        }
    },
    register: async (req, res) => {
        try {
            const salt = helper.generateSalt(18)
            const hashPassword = helper.setPassword(req.body.password, salt)
            const data = {
                name: req.body.name,
                email: req.body.email,
                status: 'cashier',
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
        if(emailValid.length < 1) response.json({ error: 'Wrong Email' })
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
    },
    deleteUser: async (req, res) => {
        try {
            const userId = req.params.userId
            const result = await userModel.deleteUser(userId)
            helper.response(res, 200, userId)
        } catch (error) {
            console.log(error)
            helper.customErrorResponse(res, 500, 'Server error!')
        }
    },
    updateUser: async (req, res) => {
        try {
            const userId = req.params.userId
            const data = {
                name: req.body.name,
                status: req.body.status
            }
            await userModel.updateUser(data,userId)
            const result = await userModel.getDetail(userId)
            helper.response(res, 200, result[0])
        } catch (error) {
            console.log(error)
            helper.customErrorResponse(res, 500, 'Server error!')
        }
    }
}
