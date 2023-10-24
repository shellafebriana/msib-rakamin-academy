var express         = require('express')
var router          = express.Router()
const controller    = require('../controllers/movie')


router.get('/', controller.index)
router.get('/add', (req, res) => {
    res.render('movie/create', {
        title : 'Add Movie',
        layout : 'layouts/main-layout'
    })
})
router.get('/:id', controller.detail)
router.post('/', controller.create)
router.delete('/delete/:id', controller.delete)

module.exports = router