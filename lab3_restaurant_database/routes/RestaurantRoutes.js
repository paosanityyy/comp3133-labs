const express = require('express');
const restaurantModel = require('../models/Restaurant'); // Ensure this path is correct
const app = express();

app.use(express.json()); // To parse JSON bodies

// Retrieve all restaurants with optional sorting by restaurant_id
app.get('/restaurants', async (req, res) => {
    try {
        const { sortBy } = req.query;
        let query = restaurantModel.find({});

        // Apply custom query helpers based on the sortBy parameter
        if (sortBy === "ASC") {
            query.sortByRestaurantId();
        } else if (sortBy === "DESC") {
            query.sortByRestaurantIdDesc();
        }

        const restaurants = await query;
        res.status(200).json(restaurants);
    } catch (err) {
        res.status(500).json({ message: "Error fetching restaurants", error: err });
    }
});

// Create a single restaurant
app.post('/restaurants', async (req, res) => {
    try {
        const restaurant = new restaurantModel(req.body);
        const savedRestaurant = await restaurant.save();
        res.status(201).json(savedRestaurant);
    } catch (err) {
        res.status(500).json({ message: "Error creating restaurant", error: err });
    }
});

// Insert many restaurants
app.post('/restaurants/insertMany', async (req, res) => {
    try {
        const insertedRestaurants = await restaurantModel.insertMany(req.body);
        res.status(201).json(insertedRestaurants);
    } catch (err) {
        res.status(500).json({ message: "Error creating restaurants", error: err });
    }
});

// Retrieve restaurants by cuisine
app.get('/restaurants/cuisine/:cuisine', async (req, res) => {
    try {
        const { cuisine } = req.params;
        const restaurants = await restaurantModel.find({ cuisine: cuisine.toUpperCase() }); // Assuming cuisine should be case-insensitive
        res.status(200).json(restaurants);
    } catch (err) {
        res.status(500).json({ message: "Error fetching restaurants by cuisine", error: err });
    }
});


app.get('/restaurants/:cuisine', async (req, res) => {
    const cuisine = req.params.cuisine;
    try {
        const restaurants = await restaurantModel.find({
            cuisine: cuisine, 
            city: { $ne: "Brooklyn" }
        }).select("cuisine name city -_id");

        res.status(200).json(restaurants);
    } catch (err) {
        res.status(500).json({ message: "Error fetching restaurants", error: err });
    }
});


module.exports = app;
