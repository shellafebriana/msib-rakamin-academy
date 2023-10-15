const express = require('express')
const expressLayouts = require('express-ejs-layouts')
const morgan = require('morgan')
var app = express()

app.set('view engine', 'ejs')
app.use(expressLayouts)
app.use(morgan('dev'))

app.get('/', (req,res) => {
    res.sendFile('./views/index.html', { root : __dirname})
})

app.listen(3000)