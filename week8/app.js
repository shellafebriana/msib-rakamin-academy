// initialization section
const express = require('express')
const app     = express()
const port    = 3000
const route   = require('./route/index.js')

app.use('/', route)

app.listen(port, ()=>{
    console.log(`Week 8 apps listening at http://localhost:${port}/`)
})