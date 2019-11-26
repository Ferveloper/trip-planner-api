const express = require('express');
const router = express.Router();

const Trip = require('../../models/Trip');
const Expense = require('../../models/Expense');

// Add a new trip
router.post('/trip', async (req, res, next) => {

  try {

    const trip = new Trip({ name: req.body.name });
    const savedTrip = await trip.save();
    res.status(200).json({
      success: true,
      result: savedTrip
    });

  } catch (err) {

    // Send JSON error response if trip name property is missing or empty
    if (err.name === 'ValidationError') {

      res.status(400).json({
            success: false,
            result: err.errors.name.message
          });

    } else {

      next(err);
      return;

    } 

  }

})

// List all trips
router.get('/trips', async (req, res, next) => {

  try {

    const trips = await Trip.find();

    res.status(200).json({
      success: true,
      results: trips
    });

  } catch(err) {

    next(err);
    return;

  }

})

// Add a new expense
router.post('/expense', async (req, res, next) => {

  try {

    const data = {};
    trip = await Trip.findOne({ name: req.body.trip }) || {};
    data.tripId = trip._id;
    data.date = req.body.date;
    data.amount = req.body.amount;
    data.category = req.body.category;
    data.description = req.body.description;

    const expense = new Expense(data);
    const savedExpense = await expense.save();
    res.status(200).json({
      success: true,
      result: savedExpense
    });

  } catch (err) {

    if (err.name === 'ValidationError') {

      res.status(400).json({
            success: false,
            result: err.message
          });

    } else {
    
    next(err);
    return;
  
    }

  }

})

// List all expenses
router.get('/expenses', async (req, res, next) => {

  try {

    const expenses = await Expense.find();

    res.status(200).json({
      success: true,
      results: expenses
    });

  } catch (err) {

    next(err);
    return;

  }

})

module.exports = router;
