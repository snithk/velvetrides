const express = require('express');
const router = express.Router();
const User = require('../models/User');

// User Registration
router.post('/register', async (req, res) => {
    const { email, phone } = req.body;

    try {
        const user = new User({ email, phone });
        await user.save();
        res.status(201).json({ message: 'User registered successfully' });
    } catch (error) {
        res.status(400).json({ message: 'Error registering user', error });
    }
});

module.exports = router;