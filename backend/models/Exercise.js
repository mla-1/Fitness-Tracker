const mongoose = require('mongoose')
const { Sets } = require('./Sets')
const Schema = mongoose.Schema

const SpecificExerciseSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    exercisesets: {
        type: Array, 
        default: [],
        data: [Sets],
        required: true
    }
})

module.exports = mongoose.model('Exercise', SpecificExerciseSchema)
