const express = require('express')
const Route = express.Router()

const { authentication, authorization } = require('../helpers/auth')
const { getAll, getDetail, addCategory, updateCategory, deleteCategory } = require('../controllers/category')

Route
    .get('/', authentication, authorization, getAll)
    .get('/:catId', authentication, authorization, getDetail)
    .post('/', authentication, authorization, addCategory)
    .patch('/:catId', authentication, authorization, updateCategory)
    .delete('/:catId', authentication, authorization, deleteCategory)

module.exports = Route
