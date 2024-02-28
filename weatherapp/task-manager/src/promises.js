require('../src/db/mongoose')
const Task = require('../src/models/tasks')

// Task.findByIdAndDelete('65c4fb49f53b28e5204966af').then((task)=>{
//     console.log(task)
//     return Task.countDocuments({completed:false}).then((task)=>{
//         console.log(task)
//     }).catch((error)=>{
//         console.log(error)
//     })
// })

const deleteTaskAndCount = async(id)=>{
    const task = await Task.findByIdAndDelete(id)
    const count = await Task.countDocuments({completed:false})
    return count
}

deleteTaskAndCount("65c8d7625375f114753cdffe").then((count)=>{
    console.log(count)
}).catch((error)=>{
    console.log(error)
})

