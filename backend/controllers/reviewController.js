const Review = require('../models/reviewsModel')

const getReview = async (req, res) => {
    const review = await Review.find({}).sort({ createdAt: -1 })
    res.status(200).json(review)
}

// Function to create a new review
const createReview = async (req, res) => {
    const {
        name,
        rating,
        text,
        userId
    } = req.body;

    try {
        // Create a new review document
        const newReview = await Review.create({ name, rating, text, userId });
        // Send a success response
        res.status(201).json({ message: 'Review created successfully', review: newReview });
    } catch (error) {
        // Handle errors and send an error response
        res.status(500).json({ message: 'Error creating review', error });
    }
};


const deleteReview = async (req, res) => {
    const { id } = req.params
    const review = await Review.findOneAndDelete({ _id: id })
    res.status(200).json(review)
}



module.exports = {
    getReview,
    createReview,
    deleteReview
}