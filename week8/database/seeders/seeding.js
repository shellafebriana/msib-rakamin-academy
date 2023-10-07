var pool = require('../../config/config.js')
var fs = require('fs')

// seeding add 5 data in table actor
const seedQuery = fs.readFileSync('database/seeders/homework_week8_seeders.sql',{encoding : 'utf-8'})
pool.query(seedQuery, (err,res) =>{
    if (err) {
        throw err
    }
    console.log('Seeding complete')
    pool.end()
})