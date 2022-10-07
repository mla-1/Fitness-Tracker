const mongoose = require("mongoose")
const Exercise = require('./Exercise')
const Schema = mongoose.Schema

const WorkoutSessionSchema = new Schema({
    SessionName: {
        type: String,
        required: true
    },
    SessionExercises : {
    type: Array,
    default: [],
    data: [Exercise],
    required: true
    }
}, { timestamps: true })

module.exports = mongoose.model('Session', WorkoutSessionSchema)