var express = require('express');
var router = express.Router();
var alcoholCtrl = require('../controllers/alcohols')

router.get('/', alcoholCtrl.index)

router.get('/new', alcoholCtrl.new)

router.get('/:id', alcoholCtrl.show)

router.get('/:id/edit', alcoholCtrl.edit)

router.post('/', alcoholCtrl.create)

router.delete('/:id', alcoholCtrl.delete)

router.put('/:id', alcoholCtrl.update)



module.exports = router;
