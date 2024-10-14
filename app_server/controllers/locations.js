const Review = require('../models/review');

const homelist = (req, res) => {
    res.render('locations-list', {
        title: 'Epic Expeditions',
        pageHeader: {
            title: 'Epic Expeditions',
            strapline: 'Journey Beyond the Ordinary'
        },
        sidebar: "Epic Expeditions offer curated travel packages for all types of travelers, from adventure seekers to leisure explorers. Users can easily browse, compare, and book trips tailored to their preferences and budgets.",
        locations: [
            {
                name: 'GOA',
                address: 'Goa: Where Every Shore Tells a Story!',
                rating: 3,
                price: 12000,
                facilities: ['Stay', 'Food', 'Transport'],
                distance: '5D Trip',
                link: "/location"
            },
            {
                name: 'Manali',
                address: 'Manali: Your Gateway to Nature Majesty!',
                rating: 4,
                price: 24000,
                facilities: ['Premium Hotel Stay', 'Food', 'Travel Guide'],
                distance: '2W Trip',
                link: "/Manali"
            },
            {
                name: 'Ooty',
                address: 'Ooty: The Queen of Hill Stations Awaits!',
                rating: 2,
                price: 8000,
                facilities: ['Food', 'Stay'],
                distance: '3D Trip',
                link: "/ooty"
            }
        ]
    });
};

const locationInfo = (req, res) => {
    res.render('location-info', { title: 'Location info' });
};


const Manali = (req, res) => {
    res.render('manali', { title: 'Manali' });
};

const ooty = (req, res) => {
    res.render('ooty', { title: 'Ooty' });
};

const addReview = (req, res) => {
    res.render('newReview', { title: 'Add review' });
};

const cart = (req, res) => {
    const cartItems = req.session.cart || [];
    res.render('cart', { title: 'Your Cart', cartItems });
};

const addToCart = (req, res) => {
    const item = req.body;
    req.session.cart = req.session.cart || [];
    req.session.cart.push(item);
    res.redirect('/cart');
};

const removeFromCart = (req, res) => {
    const itemId = req.params.id;
    req.session.cart = req.session.cart.filter(item => item.id !== itemId);
    res.redirect('/cart');
};

module.exports = {
    homelist,
    locationInfo,
    addReview,
    Manali,
    ooty,
    cart,
    addToCart,
    removeFromCart
};
