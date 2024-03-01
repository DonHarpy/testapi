const express = require('express')
require('./db/mongoose')
const app = express()
const Users = require('./models/users')

const port = process.env.PORT || 3000
app.use(express.json())

app.get('/users', (req,res)=>{
    Users.find({}).then((users)=>{
        res.status(200).send(users)
    }).catch((error)=>{
        res.status(400).send(error)
    })
})

app.post('/users' , (req , res)=>{
    const user = new Users(req.body)
    user.save().then(()=>{
        res.send(user)
    }).catch((error)=>{
        res.status(400).send(error)
    })
})

app.listen(port , ()=>{
    console.log('Server is on port ' + port)
})