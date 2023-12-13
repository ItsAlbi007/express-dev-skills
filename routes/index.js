var express = require('express');
var router = express.Router();
var alcoholCtrl = require('../controllers/alcohol')
const alcohol = require('../models/alcohol')
/* GET users listing. */
router.get('/', function(req, res, next) {
  res.render('index', {
    title: 'alcohol',
    alcohol: alcohol.getAll()
  })
});

module.exports = router;
