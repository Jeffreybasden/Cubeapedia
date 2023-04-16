const router = require('express').Router()
const authCtrl = require('../controllers/auth')
const {check,validationResult} = require('express-validator')
const {body} = require('express-validator')
const {loginValidation} = require('../validation/auth-validation')

router.post('/login',authCtrl.signIn)
router.post('/register', authCtrl.register)
router.get('/logout', authCtrl.logOut)
router.get('/reset', authCtrl.getReset)
router.post('/reset', authCtrl.postReset)
router.get('/reset/:token', authCtrl.getNewPassword)
router.post('/new-password', authCtrl.postNewPassword)
router.get('/check',authCtrl.getCheck)

module.exports = router