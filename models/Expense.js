'use strict';

const mongoose = require('mongoose');

const expenseSchema = mongoose.Schema({
  trip: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Trip',
    required: true 
  },
  date: { type: Date, required: true },
  amount: { type: Number, required: true },
  category: { type: [String], required: true },
  description: { type: String, required: true }
});

const Expense = mongoose.model('Expense', expenseSchema);

module.exports = Expense;