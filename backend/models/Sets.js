const mongoose = require("mongoose")
const Schema = mongoose.Schema

const WorkoutSetsSchema = new Schema({
    setnumber: {
        type: Number,
        required: true
    },
    weight: {
        type: Number,
        required: true
    },
    reps: {
        type: Number,
        required: true
    }
})

module.exports = mongoose.model('Sets', WorkoutSetsSchema)

