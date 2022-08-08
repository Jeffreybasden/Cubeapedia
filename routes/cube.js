const router = require("express").Router()
const path = require('path')
const cubeCtrl =  require('../controllers/cubectrl.js')

router.get('/',cubeCtrl.getHome)

router.get('/about', cubeCtrl.getAbout)

router.get('/create', cubeCtrl.getCreate)


router.post('/create', cubeCtrl.postCreate)

router.get('/details/:id', cubeCtrl.getDetails)

module.exports = router