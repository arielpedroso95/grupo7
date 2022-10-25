const usuarios = require('./users.json')

console.log(usuarios.filter((idade) => idade.idade >= 18))
