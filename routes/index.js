var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Trip Planner API REST', apiDocs: process.env.API_DOCS_PATH });
});

module.exports = router;
