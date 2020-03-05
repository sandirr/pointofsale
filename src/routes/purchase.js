const express = require('express')
const Route = express.Router()
const { buy, recap, detailPurchase } = require('../controllers/purchase')

Route
    .post('/', buy)
    .get('/', recap)
    .get('/:idBuyer', detailPurchase)

module.exports = Route
