const con = require('../configs/mysql')

module.exports = {
    buy: (data, a, date) => {
        return new Promise((resolve, reject) => {
            con.query(`SELECT * FROM product WHERE id= ${data.productId}`, (error, result) => {
                if (result.length > 0) {
                    var stock = result[0].stock - data.stock
                    var price = result[0].price * data.stock

                    if (a == 0) { con.query(`INSERT INTO purchase SET ?, idBuyer=${data.idBuyer}, totalPayment=0`, date) }

                    con.query(`UPDATE product SET stock = ${stock} WHERE id=${data.productId}`, (error, result) => {
                        if (error) reject(new Error(error))
                        con.query(`INSERT INTO purchase_detail SET ? , price = ${price}`, data, (error, result) => {
                            con.query(`SELECT sum(price) as tPrice FROM purchase_detail WHERE idBuyer=${data.idBuyer}`, (error, result) => {
                                if (error) reject(new Error(error))
                                const newP = result[0].tPrice
                                con.query(`UPDATE purchase SET totalPayment = ${newP} WHERE idBuyer=${data.idBuyer}`, (error, result) => {
                                    if (error) reject(new Error(error))
                                    resolve(result)
                                })
                            })
                        })
                    })
                } else reject(new Error(error))
            })
        })
    },
    buyer: (idBuyer) => {
        return new Promise((resolve, reject) => {
            con.query(`SELECT sum(price) as tPrice FROM purchase_detail WHERE idBuyer=${idBuyer}`, (error, result) => {
                if (error) reject(new Error(error))
                resolve(result)
            })
        })
    }
}
