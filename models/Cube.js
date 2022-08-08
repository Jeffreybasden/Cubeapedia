let cube = require('../db/database.json')
const fs = require('fs')
const uniqueid = require('uniqid')

class Cube{
    constructor(name, image,des,diff){
        this.id = uniqueid()
        this.name = name
        this.imageUrl = image
        this.des = des
        this.diff = diff
    }

    save(){
       return new Promise((resolve,reject)=>{
        cube.push(this)
        fs.writeFile('./db/database.json', JSON.stringify(cube), err=>{
            if(err){
                reject(err)
            }
            resolve('cube added')
        })
       }) 
    }

    static findById(id){
        return new Promise((resolve,reject)=>{
            cube = cube.filter(c=>c.id==id)
            if(cube) resolve(cube)
            else reject('no cube found')
        })
    }
}

module.exports = Cube