const models = require('../models/purchase')
const helpers = require('../helpers')
const con = require('../configs/mysql')

module.exports = {
    buy: async (req, res) => {
        try {
            const buy = req.body
            if (buy === undefined || buy === '') return console.log('Tidak ada data')

            const date = {
                date_added: new Date()
            }

            // await models.buyer(buy.idBuyer)
            var a = 0
            const result = await buy.products.map(e => {
                const data = {
                    idBuyer: buy.idBuyer,
                    productId: e.productId,
                    stock: e.quantity
                }

                models.buy(data, a)
                a++
            })

            helpers.response(res, 200, 'terima kasih')
        } catch (error) {
            console.log(error)
            helpers.customErrorResponse(404, 'your request not found')
        }
    }
}
