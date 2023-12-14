const Alcohol = require('../models/alcohol')

module.exports = {
  index,
  show,
}

function index(req, res) {
  res.render('alcohol/index', {
    alcohol: Alcohol.getAll()
  })
}

function show(req, res) {
  res.render('alcohol/show', {
    alcohol: Alcohol.getOne(req.params.id)
  })
}