const alcohol = [
  {make:'Blantons Silver Edition', year:'1984', price:'3k', id:123},
  {make:'Pappy Van Winkle Reserve 23', year:'1998', price:'5k', id:456},
  {make:'Old Rip Van Winkle reserver 25', year:'1989', price:'50k', id:789},
]

module.exports = {
  getAll,
  getOne,
}

function getAll() {
  return alcohol
}


function getOne(id) {
  id = parseInt(id)
  return alcohol.find(alcohol => alcohol.id === id)
}

function update(id, newAlcohol) {
  id = parseInt(id)
  const alcohol = alcohol.find(alcohol => alcohol.id === id)
  Object.assign(alcohol, newAlcohol)
}

function creat(alcohol) {
  alcohol.id = 
}