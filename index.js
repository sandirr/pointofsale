const app = require('express')()
const logger = require('morgan')
const bp = require('body-parser')
const navigator = require('./src/routes')
const { PORT } = require('./src/configs')
const fileUpload = require('express-fileupload')
const cors = require('cors')

app.use(cors())
app.listen(PORT, () => {
    console.log('server is running at port: ' + PORT)
})

app.use(logger('dev'))
app.use(bp.json())
app.use(bp.urlencoded({ extended: false }))

app.use(fileUpload())

app.use('/', navigator)
