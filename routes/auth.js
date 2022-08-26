const router = require('express').Router()
const authCtrl = require('../controllers/auth')

router.get('/login', authCtrl.getLogin)
router.get('/register', authCtrl.getSignup)
router.post('/login' ,authCtrl.signIn)
router.post('/register', authCtrl.register)
router.get('/logout', authCtrl.logOut)
router.get('/reset', authCtrl.getReset)
router.post('/reset', authCtrl.postReset)
router.get('/reset/:token', authCtrl.getNewPassword)
router.post('/new-password', authCtrl.postNewPassword)


module.exports = router