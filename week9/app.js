require('dotenv').config()

const express        = require('express')
var app              = express()
const morgan         = require('morgan')
const expressLayouts= require('express-ejs-layouts')
const port           = process.env.PORT || 3000
const route         = require('./routes/index')
const errorHandler   = require('./middlewares/error-handler')
const cors           = require('cors')

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended : false}))

app.set('view engine', 'ejs')
app.use(expressLayouts)
app.use(morgan('dev'))

app.use('/', route)
// app.use(errorHandler);

if (process.env.APP_ENV != 'test') {
    app.listen(port, () => {
        console.log(`Listening on http://localhost:${port}`)
    })
}