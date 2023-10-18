var express         = require('express')
var router          = express.Router()
const controller    = require('../controllers/movie')


router.get('/', controller.index)
router.get('/:id', controller.detail)

module.exports = router