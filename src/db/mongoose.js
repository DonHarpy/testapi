const mongoose = require('mongoose')

const mongooseServer = 'mongodb://127.0.0.1:27017/SHA-testdatabase'
mongoose.connect(mongooseServer)


// const firstUser = new Users({
//     name: 'Mustafa Harpy',
//     age: 21,
//     id: 321213077,
//     email: 'mustafaharpy@sha.edu.eg'
// })
// firstUser.save().then((firstUser)=>{
//     console.log(firstUser)
// }).catch((error)=>{
//     console.log('Error!' , error)
// })