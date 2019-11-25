'use strict';

const mongoose = require('mongoose');

//Error or success console notifications
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'Unable to connect to database'));
db.once('open', function () {
  if (process.env.NODE_ENV !== 'test') console.log('Successfully connected to database!');
});

// Fix all deprecation warnings: https://mongoosejs.com/docs/deprecations.html
mongoose.set('useNewUrlParser', true);
mongoose.set('useFindAndModify', false);
mongoose.set('useCreateIndex', true);
mongoose.set('useUnifiedTopology', true);
-
//Connecting to database
mongoose.connect(process.env.MONGODB_URI);

module.exports = db;