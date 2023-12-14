const alcohols = [
  {name:'Blantons Silver Edition', id:123},
  {name:'Pappy Van Winkle Reserve 23',  id:456},
  {name:'Old Rip Van Winkle reserver 25',  id:789},
]

module.exports = {
  getAll,
  getOne,
  update,
  create,
  delete: deleteIt,
}

function getAll() {
  return alcohols
}


function getOne(id) {
  id = parseInt(id)
  return alcohols.find(alcohol => alcohol.id === id)
}

function update(id, newAlcohol) {
  id = parseInt(id)
  const alcohol = alcohols.find(alcohol => alcohol.id === id)
  Object.assign(alcohol, newAlcohol)
}

function create(alcohol) {
  alcohol.id = Date.now() % 1000000
  alcohols.push(alcohol)

}

function deleteIt(id) {
  id = parseInt(id)
  const idx = alcohols.findIndex(alcohol => alcohol.id === id)
  alcohols.splice(idx, 1)
}
//year:'1984', price:'3k',
//year:'1998', price:'5k',
//year:'1989', price:'50k',