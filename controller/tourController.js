const tourModel = require('../model/tourModel')

// Get all tours
const getAllTours = (req, res) => {
    const tours = tourModel.getAll();
    res.json(tours);
}

// Get a single tour by ID
const getTourById = (req, res) => {
    const tour = tourModel.getById(req.params.id);
    if (!tour) {
        return res.status(404).json({ message: 'Tour not found' });
    }
    res.json(tour);
}

module.exports = {
    getAllTours,
    getTourById
};