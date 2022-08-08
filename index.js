const express = require('express');
const app = express()
const handlebars = require('express-handlebars')
const bodyparser = require('body-parser')
const env = process.env.NODE_ENV || 'development';
const port = process.env.PORT || 3000;
const cubeRoutes = require('./routes/cube.js')

app.engine('hbs',handlebars({
    extname:'.hbs',
    partialDir:__dirname+'/views/partials'
}))
app.set('views',__dirname+'/views')
app.set('view engine','hbs')
app.use(bodyparser.urlencoded({extended:false}))
app.use(express.static('static'))
app.use(cubeRoutes)
app.use((req,res)=>{
    res.render('../views/404.hbs')
})


app.listen(port, console.log(`Listening on port ${port}! Now its up to you...`));


