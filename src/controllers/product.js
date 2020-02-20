const models = require('../models/product')
const uniqid = require('uniqid')
const helpers = require('../helpers')
const { PORT, host } = require('../configs')

module.exports = {
    getAll: async (req, res) => {
        try {
            const limit = req.query.limit || 25
            const activePage = req.query.page || 1
            const searchName = req.query.name || ''
            const sortBy = req.query.by || 'id'
            const sort = req.query.sort || 'ASC'
            const result = await models.getAll(limit, activePage, searchName, sortBy, sort)
            helpers.response(res, 200, result)
        } catch (error) {
            console.log(error)
            helpers.customErrorResponse(res, 404, 'Not Found!')
        }
    },
    detailProduct: async (req, res) => {
        try {
            const productId = req.params.productId
            const result = await models.detailProduct(productId)
            helpers.response(res, 200, result)
        } catch (error) {
            console.log(error)
            helpers.customErrorResponse(res, 404, 'Internal server error!')
        }
    },
    addProduct: async (req, res) => {
        try {
            if (!req.files || Object.keys(req.files).length === 0) {
                return res.status(400).send('No files were uploaded.')
            }

            const img = req.files.image
            const imageArr = img.name.split('.')
            const imageExt = (imageArr[imageArr.length - 1]).toLowerCase()
            const filename = uniqid() + '.' + imageExt

            if (imageExt != 'png' && imageExt != 'jpg' && imageExt != 'jpeg' && imageExt != 'gif') { return res.json({ message: 'Not allowed upload another file except image' }) }

            if (img.size > 5000000) { return res.json({ message: 'Not allowed upload more than 5MB' }) }

            uploadPath = __dirname + '/../views/assets/images/' + filename

            img.mv(uploadPath, (err) => {
                if (err) {
                    return res.status(500).send(err)
                }
                console.log('Upload file success')
            })

            const imageAccess = `http://${host}:${PORT}/images/${filename}`
            data = {
                name: req.body.name,
                description: req.body.description,
                image: imageAccess,
                category: req.body.category,
                price: req.body.price,
                stock: req.body.stock,
                date_added: new Date(),
                date_updated: new Date()
            }

            const result = await models.addProduct(data)
            helpers.response(res, 200, result)
        } catch (error) {
            console.log(error)
            helpers.customErrorResponse(res, 404, 'Not Found!')
        }
    },
    updateProduct: async (req, res) => {
        try {
            if (!req.files || Object.keys(req.files).length === 0) {
                return res.status(400).send('No files were uploaded.')
            }

            const img = req.files.image
            const imageArr = img.name.split('.')
            const imageExt = (imageArr[imageArr.length - 1]).toLowerCase()
            const filename = uniqid() + '.' + imageExt

            if (imageExt != 'png' && imageExt != 'jpg' && imageExt != 'jpeg' && imageExt != 'gif') { return res.json({ message: 'Not allowed upload another file except image' }) }

            if (img.size > 5000000) { return res.json({ message: 'Not allowed upload more than 5MB' }) }

            uploadPath = __dirname + '/../views/assets/images/' + filename

            img.mv(uploadPath, (err) => {
                if (err) {
                    return res.status(500).send(err)
                }
                console.log('Upload file success')
            })

            const imageAccess = `http://${host}:${PORT}/images/${filename}`
            data = {
                name: req.body.name,
                description: req.body.description,
                image: imageAccess,
                category: req.body.category,
                price: req.body.price,
                stock: req.body.stock,
                date_updated: new Date()
            }
            const productId = req.params.productId
            const result = await models.updateProduct(data, productId)
            helpers.response(res, 200, 'product has been updated')
        } catch (error) {
            console.log(error)
            helpers.customErrorResponse(res, 404, 'Not Found!')
        }
    },
    deleteProduct: async (req, res) => {
        try {
            const productId = req.params.productId
            const result = await models.deleteProduct(productId)
            helpers.response(res, 200, 'product has been deleted')
        } catch (error) {
            console.log(error)
            helpers.customErrorResponse(res, 404, 'Not Found!')
        }
    }
}
