const knex = require('knex')
const configuration = require('../../knexfile')

const conection = knex(configuration.development)
/**
 * Aqui eu estou conectando com as configurações de desenvolvimentos do
 * banco de dados
 */

 module.exports = conection