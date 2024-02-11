const mongoose = require('mongoose');

const emailValidator = (email) => {
    const emailRegex = /\S+@\S+\.\S+/; 
    return emailRegex.test(email);
};

const UserSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Name is required"],
    },
    username: {
        type: String,
        required: [true, "Username is required"],
        unique: [true, "Username is already taken"],
        minlength: [4, "Username must be at least 4 characters long"],
    },
    email: {
        type: String, 
        required: [true, "Email is required"],
        unique: [true, "Email is already taken"],
        validate: [emailValidator, "Email is invalid"],
        trim: true,
    },
    address: {
        street: {
            type: String,
            required: [true, "Street is required"],
        },
        suite: {
            type: String,
            required: [true, "Suite is required"],
        },
        city: {
            type: String,
            required: [true, "City is required"],
            trim: true,
            validate: {
                validator: (city) => /^[a-zA-Z]+(?:[\s-][a-zA-Z]+)*$/.test(city),
                message: "City name should only contain letters and spaces",
            },
        },
        zipcode: {
            type: String,
            required: [true, "Zipcode is required"],
            validate: {
                validator: (zipcode) => /^\d{5}-\d{4}$/.test(zipcode),
                message: "Zip code must be in format XXXXX-XXXX",
            },
        },
        geo: {
            lat: {
                type: String,
                required: [true, "Latitude is required"],
            },
            lng: {
                type: String,
                required: [true, "Longitude is required"],
            },
        },
    },
    phone: {
        type: String,
        required: [true, "Phone number is required"],
        validate: {
            validator: (phone) => /^\d{1}-\d{3}-\d{3}-\d{4}$/.test(phone),
            message: "Phone number must be in format X-XXX-XXX-XXXX",
        },
    },
    website: {
        type: String,
        required: [true, "Website is required"],
        validate: {
            validator: (website) => /^(https?:\/\/)?([\da-z\.-]+)\.([a-z\.]{2,6})([\/\w \.-]*)*\/?$/.test(website),
            message: website => `${website.value} is not a valid website`,
        },
    },
    company: {
        name: {
            type: String,
            required: [true, "Company name is required"],
        },
        catchPhrase: {
            type: String,
            required: [true, "Catch phrase is required"],
        },
        bs: {
            type: String,
            required: [true, "Business strategy is required"],
        },
    },
});

module.exports = mongoose.model('User', UserSchema);
