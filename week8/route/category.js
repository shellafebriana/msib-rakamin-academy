var express              = require('express')
const CategoryController = require('../controller/CategoryController')
var route                = express.Router()
var category             = new CategoryController()

route.get('/', category.index)
route.get('/:id', category.showFilmbyId)

module.exports = route