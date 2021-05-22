
const mongoose = require('mongoose')

const DB_USER = 'vargas86'
const DB_PASSWORD = 'RCRpjguVo0xFBjgt'
const DB_HOST = 'kodemia-juandedios.0drlp.mongodb.net'
const DB_NAME = 'kodemia'

const url = `mongodb+srv://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/${DB_NAME}`

function connect() {
    return mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true })
}

module.exports = connect