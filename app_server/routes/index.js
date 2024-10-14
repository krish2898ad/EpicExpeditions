const express = require('express');
const router = express.Router();
const ctrlLocations = require('../controllers/locations');
const ctrlOthers = require('../controllers/others');
const ctrlReviews = require('../controllers/reviews');

// Locations routes
router.get('/', ctrlLocations.homelist);
router.get('/location', ctrlLocations.locationInfo);
router.get('/Manali', ctrlLocations.Manali);
router.get('/ooty', ctrlLocations.ooty);
router.get('/location/review/new', ctrlLocations.addReview);

/* Review routes */
router.post('/location/review/new', ctrlReviews.addReview); // Ensure this points to the correct function
router.get('/api/reviews', ctrlReviews.getAllReviews); // API route to get all reviews

/* Cart routes */
router.get('/cart', ctrlLocations.cart); // Route to view cart
router.post('/cart/add', ctrlLocations.addToCart); // Route to add item to cart
router.get('/cart/remove/:id', ctrlLocations.removeFromCart); // Route to remove item from cart

/* Other pages */
router.get('/about', ctrlOthers.about);

module.exports = router; // Export the router
