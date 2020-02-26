const app = require('express')()
const logger = require('morgan')
const bp = require('body-parser')
const navigator = require('./src/routes')
const { PORT } = require('./src/configs')
const fileUpload = require('express-fileupload')
const cors = require('cors')

app.use(cors('*'))
// var whitelist = ['http://192.168.1.10:8181']
// var corsOptions = {
//     origin: function (origin, callback) {
//         if (whitelist.indexOf(origin) !== -1) {
//             callback(null, true)
//         } else {
//             callback(new Error('Not allowed by CORS'))
//         }
//     }
// }
app.listen(PORT, () => {
    console.log('server is running at port: ' + PORT)
})

app.use(logger('dev'))
app.use(bp.json())
app.use(bp.urlencoded({ extended: false }))

app.use(fileUpload())

app.use('/', navigator)
