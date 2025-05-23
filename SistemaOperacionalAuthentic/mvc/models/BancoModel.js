const mysql = require("mysql2/promise")
 
connection = mysql.createPool({
    host: '127.0.0.1',
    user: 'root',
    database: 'autenticacao-login-SO',
    password: ''
})
 
 
module.exports = connection