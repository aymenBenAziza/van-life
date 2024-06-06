const express = require('express')
const { getReview, createReview, deleteReview } = require('../controllers/reviewController')
const requireAuth = require('../middleware/requireAuth')
const router = express.Router()


router.use(requireAuth)

//login route
router.get('/', getReview)


//sign up route
router.post('/', createReview)


router.delete('/:id', deleteReview)


module.exports = router