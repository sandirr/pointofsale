const express = require('express')
const Route = express.Router()

const { register, login, users, deleteUser, updateUser } = require('../controllers/user')

Route
    .post('/register', register)
    .post('/login', login)
    .get('/', users)
    .delete('/:userId', deleteUser)
    .patch('/:userId', updateUser)

module.exports = Route
