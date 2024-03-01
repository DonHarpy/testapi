const mongoose = require('mongoose')
const validator = require('validator')

const Users = mongoose.model('users', {
    name:{
        type: String,
        required: true,
        trim: true
    },
    age:{
        type: Number
    },
    id:{
        type: Number,
        required: true,
        trim: true
    },
    email:{
        type: String,
        required: true,
        validate(value){
            if (!validator.isEmail(value)) {
                throw new Error('Email is not valid')
            }
        },
        trim: true
    }

})

module.exports = Users