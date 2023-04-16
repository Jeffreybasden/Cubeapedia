const express = require('express');
const app = express()
const bodyparser = require('body-parser')
const dev  = process.env.NODE_ENV || 'development';
const port = process.env.PORT || 3000;
const cubeRoutes = require('./routes/cube.js')
const User = require('./models/user')
const mongoose = require('mongoose')
const accessRoutes = require('./routes/accessory')
const auth = require('./routes/auth')
const session = require('express-session')
const MongoDBStore = require('connect-mongodb-session')(session)
const dburl  = `mongodb+srv://${process.env.UserM}:${process.env.PassM}@cluster0.aseevzx.mongodb.net/?retryWrites=true&w=majority`
const cors = require("cors")




// middleWare
const store = new MongoDBStore({ 
    uri:dburl,
    collection:'sessions'
})

app.use(cors())

app.use(session({
    secret:'weheremyguy',
    resave:false,
    saveUninitialized:false,
    store:store
}))

app.use((req,res,next)=>{
    if(!req.session.user){ 
        return next()
    }else{

        User.findById(req.session.user._id).then(user=>{
            req.user = user
            next()
        })
    }
})
app.use((req,res,next)=>{
    res.locals.isAuthenticated = req.session.isLoggedIn
    next()
})


app.use(bodyparser.json({extended:true}))
app.use(express.static('static'))
app.use(cubeRoutes)
app.use(accessRoutes)
app.use(auth)
mongoose.connect(dburl).then(()=>{
app.listen(port, console.log(`Listening on port ${port}! Now its up to you...`));
}).catch(err=>{
    console.log(err)
})




