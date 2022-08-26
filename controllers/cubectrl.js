
const Cube = require('../models/Cube.js')
const Accessory = require('../models/Accessory')


exports.getHome = (req,res)=>{
    Cube.find({}).then((cubes)=>{
        const cubeCopy = [...cubes]
        
        
        
        if(req.query.search){
            cubes = cubes.filter(c=> c.name.toLowerCase().includes(req.query.search.toLowerCase()))
            console.log(cubes)
        }
        
        if(req.query.from){
            cubes = cubes.filter(c=> c.diff >= req.query.from)
            console.log(cubes)
        }
        
        if(req.query.to){
            cubes = cubes.filter(c=> c.diff <= req.query.to)
            console.log(cubes)
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

    const formData = req.body
    const imagePattern = /^https?:\/\/.*\/.*\.(png|gif|jpg|jpeg|svg)\??.*$/gmi;
    if(!formData.name){
        return console.log('no Names');
    }else if(!formData.des || formData.des.length>=200){
       return console.log('No description / Description too long!')
    }else if(!formData.imageUrl || !imagePattern.test(formData.imageUrl)){
        console.log(formData)
        return console.log('No Image / Invalid Image url')
    }else if(!formData.diff || formData.diff <1 || formData.diff >6)
        return console.log('Difficulty level is required 1-6')
        formData.CreatorId = req.user._id.toString()
        console.log(req.session, req)
    cube = new Cube(formData)
    cube.save().then(()=>{
        console.log('Cube stored in the Database')
        res.redirect('/')
    }).catch(err=> console.log(err))
}
exports.getDetails = (req,res)=>{
    let id = req.params.id
    Cube.find({_id:id}).populate('accessories').then(cube=>{
        let owner = false;
        if(req.user){
            owner = req.user._id.toString() === cube.CreatorId
        }
        console.log(cube[0].accessories)
       res.render('details.hbs', {DocTitle:'Details',cube:cube[0], accessory:cube[0].accessories,owner})
    })
        
        
}

exports.getEdit = (req,res)=>{
const cubeId = req.params.id
Cube.findById(cubeId).then(cube=>{
    if(cube){
        res.render('../views/resources/editCubePage',{docTitle:'EditCubes',cube})
    }
})
} 
 
    
  