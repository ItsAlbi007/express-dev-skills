var express = require('express');
var router = express.Router();
const Alcohol = require('../models/alcohol')
/* GET users listing. */
router.get('/', function(req, res, next) {
  res.render('index', {
    title: 'alcohols',
    alcohols: Alcohol.getAll()
  })
});

module.exports = router;
