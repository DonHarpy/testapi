const mongoose = require('mongoose')
const validator = require('validator')
mongoose.connect('mongodb://127.0.0.1:27017/task-manager-api' ,{
    // useNewUrlParser: true,
    // useCreateIndex : true   
})   



// const firstUser = new User({
//     name: '   Mustafa    ',
//     age: 21,
//     email:'mustafa@gmail.com',
//     password: ' asd123asd123 '
// })

// firstUser.save().then(() => {
//     console.log(firstUser)
// }).catch((error) => {
//     console.log('Error!' , error)
// })

// const tasks = mongoose.model('tasks' , {
//     description: {
//         type: String,
//         required: true,
//         trim: true
//     },
//     completed: {
//         type: Boolean,
//         required: false,
//         default: false
//     }
// })




