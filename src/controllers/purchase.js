const models = require('../models/purchase')
const helpers = require('../helpers')

module.exports = {
    buy: async (req, res) => {
        try {
            const buy = req.body
            if (buy === undefined || buy === '') return console.log('Tidak ada data')

            var a = 0
            await buy.products.map(e => {
                const data = {
                    idBuyer: buy.idBuyer,
                    productId: e.productId,
                    stock: e.quantity
                }
                const date = {
                    date_added: new Date()
                }
                models.buy(data, a, date)
                a++
            })

            helpers.response(res, 200, 'terima kasih telah berbelanja!')
        } catch (error) {
            console.log(error)
            helpers.customErrorResponse(404, 'your request not found')
        }
    }
}
