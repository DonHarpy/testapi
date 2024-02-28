const mongoose = require('mongoose')
const validator = require('validator')
// const bcrypt = require('bcryptjs')


// userSchema.pre('save' , async function(next){
//     const user = this
//     if(user.isModified('password')){
//         user.password = await bcrypt.hash(user.password , 8)
//     }
//     console.log('before saving')
//     next()
// })
const User = mongoose.model('User', {
    name: {
        type: String,
        required: true,
        trim: true
    },
    email:{
        type: String,
        required: true,
        validate(value){
            if(!validator.isEmail(value)){
                throw new Error('email is not valid')
            }

        }
    },
    password: {
        type: String,
        required: true,
        trim: true,
        minlength: 6,
        validate(value){
            if(value.toLowerCase().includes('password')){
                throw new Error('invalid password')
            }
        }
    },
    age: {
        type: Number
    }
} )

module.exports = User