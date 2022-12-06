const { body } = require("express-validator")

exports.loginValidation = (req,res)=>{
   return [
        body('username').trim().not().isEmail().withMessage('No Spaces')
        .isAlphanumeric()
        .withMessage('Username Needs to be Alphanumeric')
        .isLength({min:5, max:20})
        .withMessage('Username should be between 5-20 characters'),
        body('password')
        .isAlphanumeric()
        .isLength({min:8,max:20}),
        body('password').isAlphanumeric()
        ]
}


exports.SignUpValidation = (req,res)=>{

}