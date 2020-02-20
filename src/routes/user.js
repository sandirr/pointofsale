const express = require('express')
const Route = express.Router()

const { register, login } = require('../controllers/user')

Route
    .post('/register', register)
    .post('/login', login)

module.exports = Route
