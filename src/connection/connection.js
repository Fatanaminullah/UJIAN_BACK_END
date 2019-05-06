const mysql = require('mysql')

const connect = mysql.createConnection({
    user: 'root',
    password : 'mysql1234',
    host : 'localhost',
    database : 'ujianbackend',
    port : '3308'
})

module.exports = connect