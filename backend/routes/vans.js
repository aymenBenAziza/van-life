const express = require('express')
const { getVans, getVan, createVan, getVansForUser, deleteVan } = require('../controllers/vanConroller')
const requireAuth = require('../middleware/requireAuth')

const router = express.Router()



//get all vans
router.get('/', getVans)


router.get('/user', requireAuth, getVansForUser);


router.delete('/user/:id', requireAuth, deleteVan)

//get a specific van
router.get('/:id', getVan)

//post a new workout
router.post('/', requireAuth, createVan)
module.exports = router