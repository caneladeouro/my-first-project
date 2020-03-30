//todo código desenvolvido por nós é bom colocar em uma pasta separada o 'src'

const express = require('express')
/*importação do módulo 'express' para express, 
tendo nessa constante todas as funcionalidades do express*/

const cors = require('cors')
//o cors determina quem vai entrar dentro da aplicação

const routes = require('./routes')
//Aqui eu estou importando as rotas(nota: tem que ter o "./" se não ele entende como se fosse um pacote)

const app = express()
//criação da aplicação, é onde vai as rotas e todas funcionalidades

app.use(cors())
/**
 * do modo que está ele está permitindo todas aplicações frontend possam acessalo
 */
app.use(express.json())
/*
    Aqui eu informo para o express que tudo está no formato JSON, 
    aí ele passa para JavaScript, sempre ele converte o que está depois, 
    então sempre colocamos antes das requisições.
*/
app.use(routes)
//Aqui eu ativo as minhas rotas

/*
    rotas - rotas são todo o conjunto da aplicação até o local.
    recurso - recurso é o que quero naquele lugar, 
    como por exemplo a listagem de usuários. 
*/ 
/*
    Métodos HTTP:

    GET - Buscar uma informação do backend
    POST - Criar uma informação no backend
    PUT - Alterar uma informção no backend
    DELETE - Deletar uma informação no backend
*/ 
/*
    Tipos de parâmetros:

    Query Params - Parâmetros nomeados enviados na rota após "?" (Filtros, paginação),
    ex: http://localhost:3333/users?name=Matheus&page=2&idade=25 (podemos anexiçar algum filto a mais com "&")
    Route Params - Parâmetros para identificar recursos,
    ele serve mais para identificar os dados de um unico usuário, 
    o parâmetro vai no na URL depois do ":" e depois a resposta, ex
    http: //localhost:3333/users/:id --> http://localhost:3333/users/1
    (Aqui ele está buscando usuários com o id 1)
    Request Body - Corpo da nossa requisição, utilizado para criar ou alterar recursos
*/

/* 
    SQL: MySQL, SQLite, PostgreSQL, Oracle, Microsoft SQL Server
    (tem uma estrutura muito melhor, possibilitando um maior controle)
    NoSQL: MongoDB, CouchDB, etc

    {
        Comunicação com o banco de dados:
        Instalação do Driver diretamente do banco de dados: SELECT * FROM users
        Queriy Buider: contruimos a query com JavaScript: table('users').select('*')
        ^no caso estaremos usando o KNEX.JS 
    }
*/

/*
app.get('/', (require, reponse) => {
    return reponse.json({
        autor: 'Matheus',
        mensagem: 'Olá Mundo!',
    })
})
*/


app.listen(3333)
//serve para informar o porta no qual se encontra a aplicação