const con = require('../configs/mysql')

module.exports = {
    getAll: (searchName) => {
        return new Promise((resolve, reject) => {
            con.query(`SELECT * FROM tabel_category WHERE name LIKE '%${searchName}%'`, (error, result) => {
                if (error) reject(new Error(error))
                resolve(result)
            })
        })
    },
    getDetail: (catId) => {
        return new Promise((resolve, reject) => {
            con.query('SELECT * FROM tabel_category WHERE id = ?', catId, (error, result) => {
                if (error) reject(new Error(error))
                resolve(result)
            })
        })
    },
    addCategory: (data) => {
        return new Promise((resolve, reject) => {
            con.query('INSERT INTO tabel_category SET ?', data, (error, result) => {
                if (error) reject(new Error(error))
                resolve(result)
            })
        })
    },
    updateCategory: (data, id) => {
        return new Promise((resolve, reject) => {
            con.query('UPDATE tabel_category SET ? WHERE id = ?', [data, id], (error, result) => {
                if (error) reject(new Error(error))
                resolve(result)
            })
        })
    },
    deleteCategory: (id) => {
        return new Promise((resolve, reject) => {
            con.query('DELETE FROM tabel_category WHERE id = ?', id, (error, result) => {
                if (error) reject(new Error(error))
                resolve(result)
            })
        })
    }
}
