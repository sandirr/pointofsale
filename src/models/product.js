const con = require('../configs/mysql')

module.exports = {
    countData: (searchName, cat)=>{
        return new Promise((resolve, reject)=>{
            con.query(`SELECT count(*) as totalData FROM product p
                LEFT JOIN tabel_category tc ON p.category = tc.id
            WHERE p.name LIKE '%${searchName}%' AND tc.name LIKE '%${cat}%'
                `,(error, result)=>{
                resolve(result[0].totalData)
            })
        })
    },
    getAll: (searchName, pagination, cat) => {
        return new Promise((resolve, reject) => {
            const totalData = con.query('SELECT count(*) FROM product')
            //   const totalPages = Math.ceil(totalData / limit)
            const firstData = ((pagination.limit * pagination.activePage) - pagination.limit)
            con.query(`SELECT p.id, p.name, p.description, p.image, tc.name as category, p.stock, p.price, p.date_added, p.date_updated FROM product p 
            LEFT JOIN tabel_category tc ON p.category = tc.id
            WHERE p.name LIKE '%${searchName}%' AND tc.name LIKE '%${cat}%'
            ORDER BY ${pagination.by} ${pagination.sort}
            LIMIT ${firstData},${pagination.limit}`, (error, result) => {
                if (error) reject(new Error(error))
                console.log('Get data from database')
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
                console.log('Get data from database')
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
