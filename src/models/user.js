const connection = require('../configs/mysql')

module.exports = {
    getUsers: () => {
        return new Promise((resolve, reject) => {
            connection.query('SELECT * FROM user', (error, result) => {
                if (error) reject(new Error(error))
                resolve(result)
            })
        })
    },
    register: (data) => {
        return new Promise((resolve, reject) => {
            connection.query('ALTER TABLE user AUTO_INCREMENT=0')
            connection.query('INSERT INTO user SET ?', data, (error, result) => {
                if (error) reject(new Error(error))
                resolve(result)
            })
        })
    },
    updateUser: (data, id) => {
        return new Promise((resolve, reject) => {
            connection.query('UPDATE user SET ? WHERE id = ?', [data,id], (error, result) => {
                if (error) reject(new Error(error))
                resolve(result)
            })
        })
    },
    checkEmail: (email) => {
        return new Promise((resolve, reject) => {
            connection.query('SELECT * FROM user WHERE email = ?', email, (error, result) => {
                if (error) reject(new Error(error))
                resolve(result)
            })
        })
    },
    deleteUser: (userId) => {
        return new Promise((resolve, reject) => {
            connection.query('DELETE FROM user WHERE id = ?', userId, (error, result) => {
                if (error) reject(new Error(error))
                resolve(result)
            })
        })
    },
    getDetail: (userId) => {
        return new Promise((resolve, reject) => {
            connection.query('SELECT * FROM user WHERE id = ?', userId, (error, result) => {
                if (error) reject(new Error(error))
                resolve(result)
            })
        })
    }
}
