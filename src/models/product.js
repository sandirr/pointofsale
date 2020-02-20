const con = require('../configs/mysql')

module.exports = {
    getAll: (limit, activePage, searchName, sortBy, sort) => {
        return new Promise((resolve, reject) => {
            const totalData = con.query('SELECT count(*) FROM product')
            //   const totalPages = Math.ceil(totalData / limit)
            const firstData = ((limit * activePage) - limit)
            con.query(`SELECT p.id, p.name, p.description, p.image, tc.name as category, p.stock, p.price, p.date_added, p.date_updated FROM product p 
            LEFT JOIN tabel_category tc ON p.category = tc.id
            WHERE p.name LIKE '%${searchName}%' 
            ORDER BY ${sortBy} ${sort}
            LIMIT ${firstData},${limit}`, (error, result) => {
                if (error) reject(new Error(error))
                resolve(result)
            })
        })
    },
    detailProduct: (productId) => {
        return new Promise((resolve, reject) => {
            con.query(`SELECT p.id, p.name, p.description, p.image, tc.name as category, p.stock, p.price, p.date_added, p.date_updated FROM product AS p 
            LEFT JOIN tabel_category tc ON p.category = tc.id 
            WHERE p.id = ?`, productId, (error, result) => {
                if (error) reject(new Error(error))
                resolve(result)
            })
        })
    },
    addProduct: (data) => {
        return new Promise((resolve, reject) => {
            con.query('ALTER TABLE product AUTO_INCREMENT=0')
            con.query('INSERT INTO product SET ?', data, (error, result) => {
                if (error) reject(new Error(error))
                resolve(result)
            })
        })
    },
    updateProduct: (data, productId) => {
        return new Promise((resolve, reject) => {
            con.query('UPDATE product SET ? WHERE id = ?', [data, productId], (error, result) => {
                if (error) reject(new Error(error))
                resolve(result)
            })
        })
    },
    deleteProduct: (productId) => {
        return new Promise((resolve, reject) => {
            con.query('DELETE FROM product WHERE id = ?', productId, (error, result) => {
                if (error) reject(new Error(error))
                con.query('ALTER TABLE product DROP product.id')
                con.query('ALTER TABLE product ADD id INT NOT NULL AUTO_INCREMENT PRIMARY KEY FIRST')
                resolve(result)
            })
        })
    }
}
