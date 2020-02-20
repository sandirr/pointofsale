const con = require('../configs/mysql')

module.exports = {
    buyer: (idBuyer) => {
        return new Promise((resolve, reject) => {
            con.query(`INSERT INTO purchase SET idBuyer=${idBuyer}, totalPayment=0`, (error, result) => {
                if (error) reject(new Error(error))
                resolve(result)
            })
        })
    },
    buy: (data, a) => {
        return new Promise((resolve, reject) => {
            con.query(`SELECT * FROM product WHERE id= ${data.productId}`, (error, result) => {
                if (result.length > 0) {
                    const stock = result[0].stock - data.stock
                    const price = result[0].price * data.stock
                    if (a == 0)
                        con.query(`INSERT INTO purchase SET idBuyer=${data.idBuyer}, totalPayment=${price}`)
                    con.query(`UPDATE product SET stock = ${stock} WHERE id=${data.productId}`)
                    con.query(`SELECT * FROM purchase WHERE idBuyer=${data.idBuyer}`, (error, result) => {
                        const newTotalPayment = result[0].totalPayment + price
                        con.query(`INSERT INTO purchase_detail SET ? , price = ${price}`, data)
                        con.query(`UPDATE purchase SET totalPayment=${newTotalPayment} WHERE idBuyer=${data.idBuyer}`, (error, result) => {
                            if (error) reject(new Error(error))
                            resolve(result)
                        })
                    })
                } else reject(new Error(error))
            })
        })
    },
    tPrice: (idBuyer, date) => {
        return new Promise((resolve, reject) => {
            con.query(`SELECT sum(price) as tPrice FROM purchase_detail WHERE idBuyer=${idBuyer}`,
                (error, result) => {
                    if (error) reject(new Error(error))
                    resolve(result[0].tPrice)
                })
        })
    }
}
