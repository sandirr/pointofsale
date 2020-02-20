require('dotenv/config')

module.exports = {
  database: {
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME
  },
  PORT: process.env.PORT,
  JWT_KEY: process.env.JWT_KEY,
  host: process.env.HOST
}
