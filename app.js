/*Aluno 1- Responsável por criar o projeto no git e dar acesso aos outros (Ariel)

Aluno 2 - Responsável por criar a função de listar todos os usuários acima de 18 anos. (Guilherme) 

Aluno 3 - Responsável por criar a função de listar todos os usuários inserindo mais uma
informação para cada de ativo: true

Aluno 4 - Responsável por criar a função de adicionar um usuário- opcional

Aluno 5- Responsável por criar a função de remover um usuário-opcional*/

const usuarios = require('./users.json')

// Aluno 4 - Responsável por criar a função de adicionar um usuário- opcional
// console.log(usuarios)

const adicionarUsers = novoUser => {
    const {id, nome, idade, sexo,email,telefone} = novoUser;
    
    const novoUsuario = {
        ...novoUser
    }
    usuarios.push(novoUsuario)

    return novoUsuario
}

console.log(adicionarUsers({id: 7,nome: "Ariel", sexo: "M",email: "arielpedroso@hotmail.com",telefone: "13996521314"}))

console.log(usuarios)



