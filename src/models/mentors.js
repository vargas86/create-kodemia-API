
const mongoose = require('mongoose')

const mentorSchema = new mongoose.Schema({
    name: {
        type: String,
        minLength: 2,
        maxLength: 100,
        required: true
    },
    lastName: {
        type: String,
        minLength: 2,
        maxLength: 100,
        required: true
    },
    age: {
        type: Number,
        minLength: 2,
        maxLength: 150,
        required: true
    },
    gender: {
        type: String,
        maxLength: 1,
        enum: [ 'm', 'f' ],
        required: true
    },
    modulo: {
        type: String,
        minLength: 2,
        maxLength: 100,
        required: true
    }
})

const model = mongoose.model('mentors', mentorSchema)

module.exports = model