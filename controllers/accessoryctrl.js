const Cube = require('../models/Cube')
const Accessory = require('../models/Accessory')

exports.getAttach = (req,res)=>{
    //fine cube details 
    //get all accessories 
    //then send back accessories that are not already attached to that cube 
    Cube.findById(req.params.cubeId).populate('accessories').then((cube)=>{
        Accessory.find({}).where('_id').nin(cube.accessories).then(acc=>{
            res.render('attachAccessory.hbs',{cube:cube, accessory:acc})
        })
    })

   
}
exports.getCreate = (req,res)=>{
    res.render('createAccessory.hbs',{docTitle:'CreateAccessory'})
   
}
exports.postCreate = (req,res)=>{
    let formData = req.body
    
    //validation
    const imagePattern = /^https?:\/\/.*\/.*\.(png|gif|jpg|jpeg|svg)\??.*$/gmi;
    if(!formData.name){
        return console.log('No Name')
    }else if(!formData.des){
        return console.log("no description")
    }else if(!formData.imageUrl || !imagePattern.test(formData.imageUrl) ){
        return console.log('No image or image url not valid')
    }
        // data passes checks then it is saved to remote database 
    const accessory = new Accessory(formData)
    accessory.save().then(()=>{
        res.redirect('/')
    })
}


exports.postAttach = async(req,res)=>{
    let formData = req.body.accessory //gets selected attachment id
    let Id = req.params.cubeId // gets cube id from url
    let cube = await Cube.findById(Id) // gets cube from db
    cube.accessories.push(formData) // adds accessory to db
    await cube.save(cube)
    //stores cube in accessory cube array to form the link in DB
    let accessory = await Accessory.findById(formData) 
    accessory.Cubes.push(Id)
    await accessory.save()

    res.redirect(`/details/${Id}`) 
   
}