/**
 * Quando fazemos logim estamos iniciando uma sessão então é melhor 
 colocar em outro arquivo
 */
const conection = require('../database/connection')

module.exports = {
    async create (require, response) {
        
        const { id } = require.body

        const ong = await conection('ongs')
        .where('id', id)
        .select('name')
        .first()

        if (!ong) {
            return response.status(400).json({ error: 'No ONG found with this ID' })
        }
        return response.json(ong)
    }
}