const express = require('express')
const router = express.Router()
const accessoryCtrl = require('../controllers/accessoryctrl')
const isAuth = require('../middlewares/isAuth')


router.get('/attach/accessory/:cubeId',isAuth.isAuth,accessoryCtrl.getAttach)
router.post('/attach/accessory/:cubeId',isAuth.isAuth,accessoryCtrl.postAttach)
router.get('/create/accessory',isAuth.isAuth,accessoryCtrl.getCreate)
router.post('/create/accessory',isAuth.isAuth,accessoryCtrl.postCreate)



module.exports = router