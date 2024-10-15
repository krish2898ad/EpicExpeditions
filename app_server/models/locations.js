const mongoose = require('mongoose');
const locationSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    facilities: {
        type: [String],  // Array of strings
        required: true
    },
    about: {
        type: String,
        required: true
    },
    images: {
        type: [String],  // Array of URLs as strings
        required: true
    },
    rating: {
        type: Number,
        default: null    // Optional field, default is null
    },
    reviews: [reviewSchema]
});


mongoose.model('Location', locationSchema);