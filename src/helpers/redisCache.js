const redis = require('redis')
const redisClient = redis.createClient()

redisClient.on('error', (error) => {
    console.log(error)
})

module.exports = {
    get: (key) => {
        return new Promise((resolve, reject) => {
            redisClient.get(key, (error, reply) => {
                if (!error && !reply) {
                    resolve(null)
                } else {
                    const data = JSON.parse(reply)
                    console.log('Get data from redis')
                    resolve(data)
                }
            })
        })
    },
    set: (key, value) => {
        return new Promise((resolve, reject) => {
            const data = JSON.stringify(value)
            redisClient.set(key, data, (error, reply) => {
                if (error) console.log(error)
                console.log('Data has been stored on Redis')
                resolve(reply)
            })
        })
    },
    del: (key) => {
        return new Promise((resolve, reject) => {
            redisClient.del(key, (error, reply) => {
                if (error) console.log(error)
                console.log('Data has been deleted from Redis')
                resolve(reply)
            })
        })
    }
}