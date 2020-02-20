const express = require('express')
const Route = express.Router()

const { authentication, authorization } = require('../helpers/auth')
const { getAll, addProduct, updateProduct, detailProduct, deleteProduct } = require('../controllers/product')

Route
    .get('/', authentication, authorization, getAll)
    .get('/:productId', authentication, authorization, detailProduct)
    .post('/', authentication, authorization, addProduct)
    .patch('/:productId', authentication, authorization, updateProduct)
    .delete('/:productId', authentication, authorization, deleteProduct)

module.exports = Route
