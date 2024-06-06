const mongoose = require('mongoose');

const reviewsSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    time: {
        type: Date,
        default: Date.now
    },
    rating: {
        type: Number,
        required: true
    },
    text: {
        type: String,
        required: true
    },
    userId: {
        type:String, 
        required: true
    }
});

module.exports = mongoose.model("Review", reviewsSchema);