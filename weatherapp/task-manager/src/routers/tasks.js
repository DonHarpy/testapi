const express = require('express')
const router = new express.Router()
const Task = require('../models/tasks')

router.post('/tasks' , async(req,res)=>{
    const task = new Task(req.body)
    
    try{
        await task.save()
        res.status(200).send(task)
    }catch{
        res.status(400).send()
    }
})

router.get('/tasks', async(req,res)=>{
    try{
        const tasks = await Task.find({})
        res.status(200).send(tasks)
    }catch{
        res.status(404).send()
    }
    
    
})

router.get('/tasks/:id' , async(req,res)=>{
    const _id = req.params.id
    try{
        const task = await Task.findById(_id)
        if(!task){
            return res.status(404).send()
        }
        res.send(task)
    }catch(error){
        res.status(500).send()
    }
})

router.patch('/tasks/:id', async(req,res)=>{
    const allowedUpdates = ['description','completed']
    const updates = Object.keys(req.body)
    const isValid = updates.every((update)=>allowedUpdates.includes(update))

    if (!isValid) {
        return res.status(400).send({error:"Update not valid"})
    }
    try{
        const task = await Task.findById(req.params.id)
        updates.forEach((update) => task[update] = req.body[update])
        task.save()
        if (!task) {
            res.status(404).send()
        }
        res.status(200).send(task)
    }catch(error){
        res.status(400).send(error)
    }
    

})


router.delete('/tasks/:id' , async(req,res)=>{
    try{
        const task = await Task.findByIdAndDelete(req.params.id)
        if (!task) {
            res.status(404).send()      
        }
        res.send(task)
    }catch(error){  
        res.status(400).send()
    }
})

module.exports = router