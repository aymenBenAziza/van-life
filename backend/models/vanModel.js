const mongoose = require('mongoose')

const Schema = mongoose.Schema

const vanSchema = new Schema({
    id: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    imageUrl: {
        type: String,
        required: true
    },
    type: {
        type: String,
        required: true
    }
})


module.exports = mongoose.model('Vans', vanSchema)