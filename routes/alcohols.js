var express = require('express');
var router = express.Router();
var alcoholCtrl = require('../controllers/alcohols')

router.get('/', alcoholCtrl.index)

router.get('/:id', alcoholCtrl.show)

module.exports = router;