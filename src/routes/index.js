const express = require('express')
const Route = express.Router()
const productRouter = require('./product')
const userRouter = require('./user')
const categoryRouter = require('./category')
const purchaseRouter = require('./purchase')
const lastweek = require('./lastweek')

Route
    .use('/product', productRouter)
    .use('/user', userRouter)
    .use('/category', categoryRouter)
    .use('/purchase', purchaseRouter)
    .use('/images', express.static('./src/views/assets/images'))
    .use('/lastweek', lastweek)

module.exports = Route
