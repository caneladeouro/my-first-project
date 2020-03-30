
exports.up = function(knex) {
    //o método 'up' sempre é responsável por criar minha tabela, o que vai acontecer assim que executar a migration
    return knex.schema.createTable('ongs', function(table) {
        /*
            Aqui estamos criando uma nova tabela chamada 'ongs',
            o segundo parâmetro é uma função
        */
        table.string('id').primary()
        /*
            esse e mais outros são campos da nossa tabela,
            no caso é o 'id', alem de ser ser a chave primṕaria('primary()')
        */
        table.string('name').notNullable()
        //no caso não pode ser nulo o valor
        table.string('email').notNullable()
        table.string('whatsapp').notNullable()
        table.string('city').notNullable()
        table.string('uf', 2).notNullable()
        //uf é estado, colocamos 2 como segundo parâmetro para limitar ao número de letras
        })

};

exports.down = function(knex) {
  /*
    geralmente usamos para deletar, o que vou voltar atrás
  */
};

//Se quiser saber o comandos para a criar, deletar,etc coloca no terminal "npx knex"
//Para criar a tabela usamos "npx knex migrate:latest" 