const User = require('../models/user')
const Bcrypt = require('bcrypt')
const nodemailer = require('nodemailer')
const crypto = require('crypto')

const transporter=nodemailer.createTransport({
    service:'gmail',
    auth:{
        user:'',
        pass:''
    }
})





exports.getLogin = (req,res)=>{
    res.render('../views/resources/loginPage.hbs')
}

exports.getSignup= (req,res)=>{
    res.render('../views/resources/registerPage.hbs',{docTitle:'Signup', errorMessage:req.flash('error'), successMessage:req.flash('success')})
}

exports.signIn = (req,res)=>{
    const username = req.body.username
    const password = req.body.password
    const errors = validationResult(req)
    if(!errors.isEmpty()){
        return res.render('../views/resources/login.hbs',{
            docTitle:'Login',
            errorMessage:errors.array()[0].msg
        })
    }
    User.findOne({username:username}).then(user=>{
        if(!user){ 
            req.flash('error','Invalid email or password')
            return res.status(400)
        }
        //compare password givin with password stored in the db
        Bcrypt.compare(password, user.password).then(match=>{
            if(match){
                req.session.isLoggedIn = true
                req.session.user = user
                //store session in DB
               return req.session.save((err)=>{
                   if(err){
                       console.log(err)
                    }else{
                        return res.status(200)
                    } 

                })
            }
            req.flash('error',"Username or Password not valid")
            return res.redirect('/login')
        })
    }).catch(err=>{
        console.log(err)
        res.redirect('/login')
    })


}
exports.register = (req,res)=>{
 //make sure username isn't used
    User.find({username:req.body.username}).then(userData=>{
    if(userData.length>0){
        req.flash('error','Username already exist')
        return res.redirect('/register')
    }
 })
// make sure email is not used 
 User.find({email:req.body.email}).then(userData=>{
    if(userData){
        req.flash('error', 'Email already used')
        return res.redirect('/login')
    }
 })
 
 Bcrypt.hash(req.body.password,12).then(hash=>{
    const user = new User({username:req.body.username, password:hash, email:req.body.email,})
    user.save().then(()=>{
       transporter.sendMail({
        to:email,
        subject:'Welcome to Cubepedia!',
        html:`<p>Can't wait to see what you bring to the site ${req.body.username}!</p>`
       })
       req.flash("success", "Welcome")
        return res.redirect('/login')
    })
})

}

exports.logOut = (req,res)=>{
    req.flash('success','Logout successful')
    req.session.destroy(err=>{
        console.log(err)
        res.redirect('/')
    })
}

exports.getReset = (req,res)=>{
    res.render('../views/resources/reset', {docTitle:'Reset Password'})
}

exports.postReset = (req,res)=>{
    const email = req.body.email
    crypto.randomBytes(32,(err,buffer)=>{
    if(err){
        return res.redirect('/reset')
    }
    const token = buffer.toString('hex')
        User.findOne({email:email}).then(user=>{
        if(!user){
           return res.flash('error','No account with this email')
        }
        user.resetToken = token
        user.resetTokenExpiration = Date.now() +3600000
        return user.save()

        }).then(result=>{
            return transporter.sendMail({
                to:email,
                subject:'Password Reset',
                html:`
                <p>You requested a password Reset</p>
                <p> Click the link <a href = http://localhost:4500/reset/${token}"> Reset Link <a/> to reset your password </p>
                `
            })
        }).then(info=> console.log(info)).catch(err=> console.log(err))
    })
}

exports.getNewPassword = (req,res) =>{
    const token = req.params.token
    User.findOne({resetToken:token, resetTokenExpiration:{$gt: Date.now()}}).then(user=>{
        if(!user){
            return res.redirect('/login')
        }
        res.render('../views/resources/newPassword',{docTitle:'Reset Password', userId:user._id, token})
    }).catch(err=>console.log(err))

}

exports.postNewPassword = (req,res)=>{
    const newPass = req.body.password;
    const userId = req.body.userId
    const token = req.body.token

    User.findOne({
        resetToken:token,
        resetTokenExpiration:{$gt:Date.now()},
        _id:userId
    }).then(user=>{
        if(user){
            resetUser = user
            return Bcrypt.hash(newPass,12)
        }
    }).then(hash=>{
        resetUser.password = hash
        resetUser.resetToken = null;
        resetUser.resetTokenExpiration= undefined
        return resetUser.save()
    }).then(results=>{
        req.flash('success','Password was reset!')
    })

}

exports.getCheck = (req,res) =>{
    loggedIn = req.session.isLoggedIn
    if(loggedIn){
        res.status(200)
    }else{
        res.status(400)
    }
}