const express = require('express');
const router = express.Router();
const tourController = require('../controller/tourController');

// Router to get all tours
router.get('/tours', tourController.getAllTours);

module.exports = router;

// in postman, use http://localhost:3000/api/tours to get all the tours