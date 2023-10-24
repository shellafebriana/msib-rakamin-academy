require('dotenv').config()

const express        = require('express')
const expressLayouts = require('express-ejs-layouts')
const route          = require('./routes/index')
const errorHandler   = require('./middlewares/error-handler')
var app              = express()
const port           = process.env.PORT || 3000

app.set('view engine', 'ejs')
app.use(expressLayouts)
app.use(express.urlencoded({extended : false}))
app.use('/', route)
app.use(errorHandler);

if (process.env.APP_ENV != 'test') {
    app.listen(port, () => {
        console.log(`Listening on http://localhost:${port}`)
    })
}