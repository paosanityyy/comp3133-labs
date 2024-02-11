    const express = require('express');
    const userModel = require('../models/User');

    const app = express();

    // Create a new user
    // http://localhost:8081/api/v1/user
    app.post('/', async (req, res) => {
        console.log(req.body);
        const user = new userModel({...req.body});
        try {
            const savedUser = await user.save();
            res.status(201).json(savedUser);
        } catch (err) {
            res.status(500).json({ message: err.message });
        }
    });

    // Get all users
    app.get('/', async (req, res) => {
        try {
            const users = await userModel.find();
            res.json(users);
        } catch (err) {
            res.status(500).json({ message: err.message });
        }
    });

    // Get a user by id
    app.get('/:id', async (req, res) => {
        try {
            const user = await userModel.findById(req.params.id);
            if (!user) {
                return res.status(404).json({ message: "User not found" });
            }
            res.json(user);
        } catch (err) {
            res.status(500).json({ message: err.message });
        }
    });

    module.exports = app;



