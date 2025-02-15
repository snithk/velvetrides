const express = require('express');
const router = express.Router();

// Fare Calculation
router.post('/calculate-fare', (req, res) => {
    const { distance } = req.body;
    const fareRate = 10; // Example fare rate per kilometer
    const fare = distance * fareRate;

    res.json({ fare: fare.toFixed(2) });
});

// Emergency and Fraud Reporting
router.post('/emergency', (req, res) => {
    res.json({ message: 'Emergency services have been alerted!' });
});

router.post('/report-fraud', (req, res) => {
    const { type, id } = req.body;
    res.json({ message: `Fraud reported for ${type} with ID ${id}` });
});

module.exports = router;