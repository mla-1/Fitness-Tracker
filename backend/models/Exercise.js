const mongoose = require('mongoose')
const Sets = require('./Sets')
const Schema = mongoose.Schema

const SpecificExerciseSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    exercisesets: [{
        type: Schema.Types.ObjectId, 
        ref: 'Sets', 
        required: true
    }]
})

module.exports = mongoose.model('Exercise', SpecificExerciseSchema)
