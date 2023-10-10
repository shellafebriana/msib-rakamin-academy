var express     = require('express')
var route       = express.Router()
const film      = require('../route/film')
const category  = require('../route/category')

route.get('/',(req,res) =>{
    res.send('Welcome to Homework Week 8 by Shella ^^/ And in this week I make MC(model and controller coz i just want get data) concept without sequelize coz I want know first what if I code manual. Very interesting but dizzy inside')
})

route.use('/film', film)
route.use('/category', category)

module.exports = route