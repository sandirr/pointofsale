const express = require('express')
const Route = express.Router()

const { authentication, authorization } = require('../helpers/auth')
const { getAll, getDetail, addCategory, updateCategory, deleteCategory } = require('../controllers/category')

Route
    .get('/', getAll)
    .get('/:catId', getDetail)
    .post('/', addCategory)
    .patch('/:catId', updateCategory)
    .delete('/:catId', deleteCategory)

module.exports = Route
