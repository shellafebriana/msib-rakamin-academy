var express          = require('express')
const FilmController = require('../controller/FilmController')
var route            = express.Router()
var film             = new FilmController()

route.get('/', film.index)
route.get('/:id', film.showbyId)

module.exports = route