const mongoose = require('mongoose')
const exerciseName = require('./exerciseName')
const Schema = mongoose.Schema

const RoutineSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    exercises: { 
        type: Array,
        default: [],
        data: [exerciseName],
        required: true
    }
})

module.exports = mongoose.model('Routine', RoutineSchema)