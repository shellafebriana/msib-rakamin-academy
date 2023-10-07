const Pool = require('pg').Pool

const pool = new Pool({
    user : 'postgres',
    host : 'localhost',
    database : 'homework_week8',
    password : 'admin',
    port : '5432'
})

module.exports = pool