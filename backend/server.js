require('dotenv').config()

const express = require('express')
const wrkoutroutes = require('./routes/workouts.js')
const mongoose = require('mongoose')

//express app
const app = express()

//middleware

app.use(express.json())

app.use((req,res,next) => {
    console.log(req.path,req.method)
    next()
})
//routes
app.use('/api/workouts', wrkoutroutes)


mongoose.connect(process.env.MONGODB)
    .then(() => {
        app.listen(process.env.PORT, () => { 
            console.log('connected to db & listening on port', process.env.PORT)
        })        
    })
    .catch((error) => {
        console.log(error)
    })