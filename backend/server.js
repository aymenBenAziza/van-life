require('dotenv').config()
const express = require('express') // Import the Express library
const mongoose = require('mongoose') // Import the Mongoose library for MongoDB
const vansRoutes = require('./routes/vans')
const userRoutes = require('./routes/user') // Import user routes
const reviewRoutes = require('./routes/reviewRoute')

const app = express()


app.use(express.static('../frontend/build'))
app.use(express.urlencoded({extended: false}))
app.use(express.json())

app.use('/api/vans', vansRoutes)
app.use('/api/user', userRoutes)
app.use('/api/reviews', reviewRoutes)



mongoose.connect(process.env.MONGO_URL)
    .then(() => {
        app.listen(process.env.PORT, () => {
            console.log("connected to the database");
            console.log("listening on port 4000");
        })
    })
    .catch(()=> {
        console.log(err);
    })


