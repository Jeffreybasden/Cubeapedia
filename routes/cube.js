const router = require("express").Router()
const cubeCtrl =  require('../controllers/cubectrl.js')
const isAuth = require('../middlewares/isAuth')

router.get('/',cubeCtrl.getHome)
router.get('/about', cubeCtrl.getAbout)
router.get('/create',isAuth.isAuth,cubeCtrl.getCreate)
router.post('/create',isAuth.isAuth, cubeCtrl.postCreate)
router.get('/details/:id',cubeCtrl.getDetails)
router.get('/edit/:id',isAuth.isAuth,cubeCtrl.getEdit)





module.exports = router