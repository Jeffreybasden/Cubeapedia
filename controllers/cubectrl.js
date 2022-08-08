
const fs = require('fs')
const Cube = require('../models/Cube.js')



exports.getHome = (req,res)=>{
    fs.readFile('./db/database.json','utf-8',(err,cubes)=>{
        cubes = JSON.parse(cubes)
        
       const cubeCopy = [...cubes]
       
       if(req.query.search){
        cubes = cubes.filter(c=> c.name.toLowerCase().includes(req.query.search.toLowerCase()))
        
        }

        if(req.query.from){
            cubes = cubes.filter(c=> c.diff >= req.query.from)
        }

        if(req.query.to){
            cubes = cubes.filter(c=> c.diff <= req.query.to)
        }
        if(cubes.length == 0){
            cubes = cubeCopy
        }

        res.render('index.hbs',{docTitle:'Home Page', cubes:cubes})
    })
        
}
 
exports.getAbout=(req,res)=>{
    res.render('about.hbs',{docTitle:"About Us"})
}

exports.getCreate=(req,res)=>{
    res.render('create.hbs',{docTitle:"Create Page"})
}

exports.postCreate=(req,res)=>{
req.body.name 
req.body.diff
req.body.imageUrl
req.body.des
let cube = new Cube(req.body.name,req.body.imageUrl,req.body.des, req.body.diff)
cube.save().then(()=>{
    res.redirect('/')
    })
}

exports.getDetails = (req,res)=>{
    let id = req.params.id
    Cube.findById(id).then(cube=>{
        res.render('details.hbs', {DocTitle:'Details',cube})
    })
        
}

    

    
  