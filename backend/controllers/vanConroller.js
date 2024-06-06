const userVans = require('../models/userVans')
const UserVans = require('../models/userVans')
const Van = require('../models/vanModel')



// Controller function to handle GET request for all vans
const getVans = async (req, res) => {
    const vans = await Van.find({}).sort({ createdAt: -1 })
    res.status(200).send(vans)
}


const getVansForUser = async (req, res) => {
    try {
        const userId = req.user._id; // Ensure that `req.user._id` is correct
        const vans = await UserVans.find({ userId }).sort({ createdAt: -1 }); // Query should match schema
        res.status(200).json(vans);
    } catch (error) {
        res.status(500).json({ error: 'Internal server error' });
    }
}



// Controller function to handle GET request for a specific van
const getVan = async (req, res) => {
    try {
        const { id } = req.params; // Assuming id is passed as a URL parameter
        const van = await Van.findOne({ id: id });

        if (!van) {
            return res.status(404).json({ error: 'Van not found' });
        }

        res.status(200).json(van);
    } catch (error) {
        console.error('Error retrieving van:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
};


// Controller function to handle POST request for a specific van

const createVan = async (req, res) => {

    const {
        id,
        name,
        price,
        description,
        imageUrl,
        type,
        userId
    } = req.body

    try {
        const isVanExist = await UserVans.countDocuments({ id: id });

        if (isVanExist > 0) {
            return res.status(201).json({ message: "already rented " });
        }

        const van = await UserVans.create({
            id,
            name,
            price,
            description,
            imageUrl,
            type,
            userId
        })

        res.status(200).json({ van })
    } catch (err) {
        res.status(500).json({ error: err.message })
    }
}


const deleteVan = async (req, res) => {
    try {
        const { id } = req.params; // Assuming id is passed as a URL parameter
        const van = await userVans.findOneAndDelete({ id: id });

        if (!van) {
            return res.status(404).json({ error: 'Van not found' });
        }

        res.status(200).json(van);
    } catch (error) {
        res.status(500).json({ error: 'Internal server error' });
    }
}


module.exports = {
    getVans,
    getVansForUser,
    getVan,
    createVan,
    deleteVan
}