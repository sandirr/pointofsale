const express = require('express')
const Route = express.Router()

const { authentication, authorization } = require('../helpers/auth')
const { register, login, users, deleteUser, updateUser } = require('../controllers/user')

Route
    .post('/register', register)
    .post('/login', login)
    .get('/', authentication, authorization, users)
    .delete('/:userId', authentication, authorization, deleteUser)
    .patch('/:userId', authentication, authorization, updateUser)

module.exports = Route
