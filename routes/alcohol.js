var express = require('express');
var router = express.Router();
var alcoholCtrl = require('../controllers/alcohol')


router.get('/:id', alcoholCtrl.show)

module.exports = router;
