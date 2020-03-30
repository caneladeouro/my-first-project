const conection = require('../database/connection')

module.exports = {

    async index (require, response) {
        const { page = 1 } = require.query
        /**
         * Se não for oferecido o numero da página, 
         ele se define automáticamente 1
         */

        const [count] = await conection('incidents').count()
        //a quantidade de casos totais

        response.header('X-Total-Count', count['count(*)'])
        /**
         * Aqui estamos enviando o total de casos, e mandando para o hearder,
         com o nome 'X-Total-Count'
         */

        const incidents = await conection('incidents')
        .join('ongs', 'ongs.id', '=', 'incidents.ong_id')
        /**
         * Junto com os incidentes, trazemos os dados da tabela de ONGS, 
         onde o id deja igual incidents.ong_id
         */
        .limit(5)
        //o numero de páginas limitadas é 5
        .offset((page - 1) * 5)
        /**
         * na primeira página ele vai ficar com 0 e vai pegar o cinco próximos registros,
         * na segunda página ele vai ficar com 1 e vai pular o cinco primeiros registros
         */
        .select([ 
            'incidents.*', 
            'ongs.name', 
            'ongs.email', 
            'ongs.whatsapp', 
            'ongs.city', 
            'ongs.uf'
            //para evitar que o id de um sobreposse o outro 
        ])
        


        return response.json(incidents)
    },

    async create (require, response) {
        const { title, description, value } = require.body
        const ong_id = require.headers.authorization

        const [id] = await conection('incidents').insert({
            title,
            description,
            value,
            ong_id
        })
        return response.json({ id })
    },

    async delete (require, response) {
        const { id } = require.params
        const ong_id = require.headers.authorization

        const incidents = await conection('incidents')
        .where('id', id)
        .select('ong_id')
        .first()
        /**
         * Buscando o incidente da tabela de dados cuju o id for igual ao
         * id daqui, buscando um só resultado que é a coluna ong_id
         */

        if (incidents.ong_id !== ong_id) {
            return response.status(401).json({ error: "Operantion not permited" })
            /**
             * o status pode ser visto no site do mozila, no caso diz que não passou
             */
        }
        await conection('incidents').where('id', id).delete()

        return response.status(204).send()
    }
}