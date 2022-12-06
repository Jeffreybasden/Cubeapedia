const router = require("express").Router()
const cubeCtrl =  require('../controllers/cubectrl.js')
const isAuth = require('../middlewares/isAuth')

router.get('/', cubeCtrl.getHome)
router.post('/create/',isAuth.isAuth, cubeCtrl.postCreate)
router.get('/details/:id',cubeCtrl.getDetails)
router.get('/edit/:id',isAuth.isAuth,cubeCtrl.getEdit)
router.post('/edit/:id',isAuth.isAuth,cubeCtrl.postEdit)






module.exports = router