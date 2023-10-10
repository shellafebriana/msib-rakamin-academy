// initialization section
const express   = require('express')
const app       = express()
const port      = 3000
const router    = require('./route/index')

// route section
app.use('/', router)

// listen port
app.listen(port, ()=>{
    console.log(`Week 8 apps listening at http://localhost:${port}/`)
})