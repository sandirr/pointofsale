const express = require('express')
const Route = express.Router()
const { buy } = require('../controllers/purchase')

Route
    .post('/', buy)

module.exports = Route
