const models = require('../models/product')
const uniqid = require('uniqid')
const helpers = require('../helpers')
const { PORT, host } = require('../configs')
const redisCache = require('../helpers/redisCache')
const con = require('../configs/mysql')

module.exports = {
    getAll: async (req, res) => {
        try {
            const limit = req.query.limit || 9999
            const activePage = req.query.page || 1
            const searchName = req.query.name || ''
            const by = req.query.by || 'id'
            const sort = req.query.sort || 'ASC'
            const category = req.query.category || ''

            const pagination = {
                limit, activePage, by, sort
            }

            const totalData = await models.countData(searchName, category)
            const totalPages = Math.ceil(totalData / limit)

            const pager ={
                totalPages
            }



            // const key = `get-all-product-${searchName}-${pagination}`
            // const resultCache = await redisCache.get(key)

            // if (resultCache) helpers.response(res, 200, resultCache)

            // if (resultCache === null) {
                const result = await models.getAll(searchName, pagination, category)
                // await redisCache.set(key, result)
                helpers.response(res, 200, result, pager)
            // }
        } catch (error) {
            console.log(error)
            helpers.customErrorResponse(res, 404, 'Not Found!')
        }
    },
    detailProduct: async (req, res) => {
        try {
            const productId = req.params.productId

            // const key = `get-detail-product-${productId}`
            // const resultCache = await redisCache.get(key)
            // if (resultCache) helpers.response(res, 200, resultCache)

            // if (resultCache === null) {
                const result = await models.detailProduct(productId)
                // await redisCache.set(key, result)
                helpers.response(res, 200, result)
            // }
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

            // const key = `get-all-product`

            const result = await models.addProduct(data)
            // await redisCache.del(key)
            helpers.response(res, 200, 'product has been added')
        } catch (error) {
            console.log(error)
            helpers.customErrorResponse(res, 404, 'Not Found!')
        }
    },
    updateProduct: async (req, res) => {
        try {
            if (!req.files || Object.keys(req.files).length === 0) {
                // const imageAccess = `http://${host}:${PORT}/images/${filename}`
                const data = {
                    name: req.body.name,
                    description: req.body.description,
                    category: req.body.category,
                    price: req.body.price,
                    stock: req.body.stock,
                    date_updated: new Date()
                }
                const productId = req.params.productId
                // const key = `get-detail-product-${productId}`
                const result = await models.updateProduct(data, productId)
                // await redisCache.set(key, result)
                return helpers.response(res, 200, 'product has been updated')
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
            const data = {
                name: req.body.name,
                description: req.body.description,
                image: imageAccess,
                category: req.body.category,
                price: req.body.price,
                stock: req.body.stock,
                date_updated: new Date()
            }
            const productId = req.params.productId
            // const key = `get-detail-product-${productId}`
            const result = await models.updateProduct(data, productId)
            // await redisCache.set(key, result)
            helpers.response(res, 200, 'product has been updated')
        } catch (error) {
            console.log(error)
            helpers.customErrorResponse(res, 404, 'Not Found!')
        }
    },
    deleteProduct: async (req, res) => {
        try {
            const productId = req.params.productId
            // const key = `get-all-product`
            await models.deleteProduct(productId)
            // await redisCache.del(key)
            helpers.response(res, 200, 'product has been deleted')
        } catch (error) {
            console.log(error)
            helpers.customErrorResponse(res, 404, 'Not Found!')
        }
    }
}
