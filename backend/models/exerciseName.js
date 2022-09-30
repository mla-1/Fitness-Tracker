const mongoose = require("mongoose")
const Schema = mongoose.Schema

const ExercisingNameSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: false
    }
},{ timestamps: true })

module.exports = mongoose.model('exerciseName',ExercisingNameSchema)