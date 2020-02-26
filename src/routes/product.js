const express = require('express')
const Route = express.Router()

const { authentication, authorization } = require('../helpers/auth')
const { getAll, addProduct, updateProduct, detailProduct, deleteProduct } = require('../controllers/product')

Route
    .get('/', getAll)
    .get('/:productId', detailProduct)
    .post('/', addProduct)
    .patch('/:productId', updateProduct)
    .delete('/:productId', deleteProduct)

module.exports = Route
