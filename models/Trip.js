'use strict';

const mongoose = require('mongoose');

const tripSchema = mongoose.Schema({
  name: { type: String, required: true }
});

const Trip = mongoose.model('Trip', tripSchema);

module.exports = Trip;
