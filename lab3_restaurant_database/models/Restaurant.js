const mongoose = require('mongoose');

const  RestaurantSchema = new mongoose.Schema({
    "address": [{
        "building": String,
        "street": {
            type: String,
            required: true,
            trim: true
        },
        "zipcode": {
            type: String,
            default: null
        }
    }], 
    "city": {
        type: String,
        required: true,
    },
    "cuisine": {
        type: String,
        required: true,
        uppercase: true,
    },
    "name": {
        type: String,
        required: true,
        trim: true
    },
    "restaurant_id": {
        type: Number,
        required: true,
    }
});

// Sort by restaurant_id ascending
RestaurantSchema.query.sortByRestaurantId = function() {
    return this.sort({ 'restaurant_id': 1 });
};

// Sort by restaurant_id descending
RestaurantSchema.query.sortByRestaurantIdDesc = function() {
    return this.sort({ 'restaurant_id': -1 });
};

const Restaurant = mongoose.model('Restaurant', RestaurantSchema);
module.exports = Restaurant;
