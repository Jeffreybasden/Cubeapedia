const express = require('express');
const app = express()
const handlebars = require('express-handlebars')
const bodyparser = require('body-parser')
const dev  = process.env.NODE_ENV || 'development';
const port = process.env.PORT || 3000;
const cubeRoutes = require('./routes/cube.js')
const User = require('./models/user')
const mongoose = require('mongoose')
const accessRoutes = require('./routes/accessory')
const auth = require('./routes/auth')
const session = require('express-session')
const flash = require('connect-flash')
const MongoDBStore = require('connect-mongodb-session')(session)
const dburl  = `mongodb+srv://${process.env.UserM}:${process.env.PassM}@cluster0.aseevzx.mongodb.net/?retryWrites=true&w=majority`

//set view engine
app.engine('hbs',handlebars({
    extname:'.hbs',
    partialDir:__dirname+'/views/partials'
}))
app.set('views',__dirname+'/views')
app.set('view engine','hbs')

// middleWares
const store = new MongoDBStore({ 
    uri:dburl,
    collection:'sessions'
})

app.use(session({
    secret:'weheremyguy',
    resave:false,
    saveUninitialized:false,
    store:store
}))
app.use(flash()) 

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
    res.locals.errorMessage = req.flash('error') 
    res.locals.successMessage = req.flash('success')
    next()
})


app.use(bodyparser.urlencoded({extended:false}))
app.use(express.static('static'))
app.use(cubeRoutes)
app.use(accessRoutes)
app.use(auth)

app.use((req,res)=>{
    res.render('../views/404.hbs')
})

mongoose.connect(dburl).then(()=>{
app.listen(port, console.log(`Listening on port ${port}! Now its up to you...`));
}).catch(err=>{
    console.log(err)
})




