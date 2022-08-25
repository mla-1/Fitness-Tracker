const mongoose = require("mongoose")
const Routine = require("./Routine")
const Exercise = require('./Exercise')
const Schema = mongoose.Schema

const WorkoutSessionSchema = new Schema({
    SessionRoutine: {
        type: Schema.Types.ObjectId,
        ref: 'Routine',
        required: false
    },
    SessionExercises : [{
    type: Schema.Types.ObjectId,
    ref: 'Exercise',
    required: false,
    default: undefined
    }]
}, { timestamps: true })

module.exports = mongoose.model('Session', WorkoutSessionSchema)