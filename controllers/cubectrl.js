
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
        
        res.json(cubes)
    })
    
    
}



exports.postCreate=(req,res)=>{

    const formData = req.body
    const imagePattern = /^https?:\/\/.*\/.*\.(png|gif|jpg|jpeg|svg)\??.*$/gmi;
    if(!formData.name){
        return console.log('no Names');
    }else if(!formData.des || formData.des.length>=200){
       return console.log('No description / Description too long!')
    }else if(!formData.imageUrl || !imagePattern.test(formData.imageUrl)){
        
        return console.log('No Image / Invalid Image url')
    }else if(!formData.diff || formData.diff <1 || formData.diff >6)
        return console.log('Difficulty level is required 1-6')
        formData.creatorId = req.user._id.toString()
       
      
    const cube = new Cube(formData)
    cube.save().then(()=>{
        console.log('Cube stored in the Database')
        req.flash('success','Cube added')
        res.status(200)
    }).catch(err=> console.log(err))
}
exports.getDetails = (req,res)=>{
    let id = req.params.id
    Cube.findById({_id:id}).populate('accessories').then(cube=>{
        let owner = false;
        if(req.user){
            owner = req.user._id.toString() === cube.creatorId
            console.log(owner,req.user,cube.creatorId)
        }
        
       res.json(cube)
    })
        
        
}

exports.getEdit = (req,res)=>{
const cubeId = req.params.id
Cube.findById(cubeId).then(cube=>{
    if(cube){
        res.json(cube)
    }
})
} 
 
    
exports.postEdit = async(req,res)=>{
    req.body.name
    req.body.diff
    req.body.des
    req.body.imageUrl
    let cube = await Cube.findById(req.params.id)
    cube.name  = req.body.name
    cube.diff = req.body.diff
    cube.des = req.body.des
    cube.imageUrl = req.body.imageUrl

    await cube.save()
    res.status(200)

}

exports.getDelete = async(req,res) =>{
    const id = req.params.id
    await Cube.findByIdAndDelete(id)
    req.flash('success', 'Cube deleted!')
    res.status(200)

}