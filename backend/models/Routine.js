const mongoose = require('mongoose')
const Exercise = require('./Exercise')
const Schema = mongoose.Schema

const RoutineSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    exercises: [{ 
        type: Schema.Types.ObjectId, 
        ref: 'exerciseName', 
        required: true
    }]
})

module.exports = mongoose.model('Routine', RoutineSchema)