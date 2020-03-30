/**
 * Nunca é bom colocar duas listagens em um mesmo arquivo
 * Responsácel pelo perfil de uma ONG
 */
const conection = require('../database/connection')

module.exports = {
    async index (require, response) {
        const ong_id = require.headers.authorization

        const incidents = await conection('incidents')
        .where('ong_id', ong_id)
        .select('*')

        return response.json(incidents)
    }
}