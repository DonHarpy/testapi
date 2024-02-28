const express = require('express')
const router = new express.Router()
const User = require('../models/users')

router.post('/users' , async (req , res)=>{
    const user = new User(req.body)
    try{
        await user.save()
        res.status(201).send()
    }catch(error){
        res.status(404).send()
    }
})

router.patch('/users' , async(req,res)=>{
    const updates = Object.keys(req.body)
    const allowedUpdates = ['name' , 'email' , 'password' , 'age']
    const isValid = updates.every((update) => allowedUpdates.includes(update))
    if (!isValid) {
        return res.status(400).send({error: 'invalid update!'})
    }
    try{
        const user = await User.findById(req.params.id)
    updates.forEach((update) => user[update] = req.body[update])
    await user.save()

    if (!user) {
        return res.status(404).send()
    }
    }catch(error){
        res.status(400).send()
    }
    
}
)

router.get('/users', async(req,res)=>{
    try{
        const users = await User.find({})
        res.status(200).send(users)
    }catch{
        res.status(404).send()
    }
    
    
})

module.exports = router



