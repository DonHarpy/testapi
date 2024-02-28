const express = require('express')
require('./db/mongoose')
const User = require('./models/users.js')
// const Task = require('./models/tasks.js')
const app = express()
const port = process.env.PORT || 3000
const taskRouter = require('./routers/tasks.js')
const userRouter = require('./routers/users.js')

app.use(express.json())
// app.use(taskRouter)
app.use(userRouter)


app.listen(port , () =>{
    console.log('Server is up on port' + port)
})

