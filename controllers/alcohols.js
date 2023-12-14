const Alcohol = require('../models/alcohol')

module.exports = {
  index,
  show,
  new: newAlcohol,
  delete: deleteAlcohol,
  create,
  edit,
  update,
}

function index(req, res) {
  res.render('alcohols/index', {
    alcohols: Alcohol.getAll()
  })
}

function show(req, res) {
  res.render('alcohols/show', {
    alcohol: Alcohol.getOne(req.params.id)
  })
}

function newAlcohol(req, res) {
  res.render('alcohols/new', {title:'New Alcohol'})
}

function deleteAlcohol(req, res){
  Alcohol.delete(req.params.id)
  res.redirect('/')
}

function create(req,res) {
  Alcohol.create(req.body)
  res.redirect('/')
}

function edit(req, res){
  const alcohol = Alcohol.getOne(req.params.id)
  res.render('alcohols/edit', {
    title: 'Edit Alcohols',
    alcohol,
  })
}

function update(req, res) {
  Alcohol.update(req.params.id, req.body)
  res.redirect(`/alcohols/${req.params.id}`)
}