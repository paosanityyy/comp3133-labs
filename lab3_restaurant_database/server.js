const express = require('express');
const mongoose = require('mongoose');
const restaurantRouter = require('./routes/RestaurantRoutes.js');

const app = express();
app.use(express.json());

// Connect to MongoDB
// mongodb+srv://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/${DB_NAME}?retryWrites=true&w=majority
const DB_HOST = "cluster0.3myz13n.mongodb.net";
const DB_USER =  "paolocasison";
const DB_PASSWORD = "Password.123";
const DB_NAME = "Restaurants";
const DB_CONNECTION_STRING = `mongodb+srv://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/${DB_NAME}?retryWrites=true&w=majority`;

mongoose.connect(DB_CONNECTION_STRING, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(success => {
    console.log("Connected to MongoDB");
}).catch(err => {
    console.log("Error connecting to MongoDB", err);
});

app.use(restaurantRouter);

app.listen(3000, () => { console.log(`Server is running... `) });

