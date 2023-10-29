const methodOverride = require('method-override')
const express       = require('express')
const router        = express.Router()
const path          = require('path')
const movieRoute    = require('./movie')
// const userRoute   = require('./users')


router.use(methodOverride('_method'))
router.get('/', (req,res) => {
    res.sendFile(path.resolve('views/index.html'))
})
router.use('/movie', movieRoute)
// router.use('/users', userRoute)

module.exports = router