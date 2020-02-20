const models = require('../models/category')
const uniqid = require('uniqid')
const helpers = require('../helpers')
const { PORT, host } = require('../configs')

module.exports = {
    getAll: async (req, res) => {
        try {
            const name = req.query.name || ''
            const result = await models.getAll(name)
            helpers.response(res, 200, result)
        } catch (error) {
            console.log(error)
            helpers.customErrorResponse(res, 404, 'Not Found!')
        }
    },
    getDetail: async (req, res) => {
        try {
            const catId = req.params.catId
            const result = await models.getDetail(catId)
            helpers.response(res, 200, result)
        } catch (error) {
            console.log(error)
            helpers.customErrorResponse(res, 404, 'Not Found!')
        }
    },
    addCategory: async (req, res) => {
        try {
            data = {
                name: req.body.name
            }
            result = await models.addCategory(data)
            helpers.response(res, 200, 'category has been added')
        } catch (error) {
            console.log(error)
            helpers.customErrorResponse(res, 400, 'Data can`t send')
        }
    },
    updateCategory: async (req, res) => {
        try {
            const catId = req.params.catId
            data = {
                name: req.body.name
            }
            result = await models.updateCategory(data, catId)
            helpers.response(res, 200, 'category has been updated')
        } catch (error) {
            console.log(error)
            helpers.customErrorResponse(res, 400, 'Data can`t send')
        }
    },
    deleteCategory: async (req, res) => {
        try {
            const catId = req.params.catId
            result = await models.deleteCategory(catId)
            helpers.response(res, 200, 'category has been deleted')
        } catch (error) {
            console.log(error)
            helpers.customErrorResponse(res, 500, 'Server error!')
        }
    }
}
