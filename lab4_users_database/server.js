const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config();

const userRouter = require('./routes/UserRoutes');

const PORT = process.env.PORT || 8081;

const app = express();
app.use(express.json());

// Connect to MongoDB
const DB_HOST = "cluster0.3myz13n.mongodb.net";
const DB_NAME = "lab4_comp3133";
const DB_USER = "paolocasison";
const DB_PASSWORD = "Password.123";
const DB_CONNECTION_STRING = `mongodb+srv://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/${DB_NAME}?retryWrites=true&w=majority`;

mongoose.connect(DB_CONNECTION_STRING, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(success => {
    console.log("Connected to MongoDB");
}).catch(err => {
    console.log("Error connecting to MongoDB", err);
});

app.use('/api/v1/user', userRouter);

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});