const conection = require('../database/connection')
const crypto = require('crypto')


module.exports = {

    async index(request, response) {
        const ongs = await conection('ongs').select('*')
        //conecção com a tabela ongs, e seleção de todos campos, todos registros dentro da tabela ongs
    
        return response.json(ongs)
    },

    async create(request, response) {
        /*
            o request guarda todos da nossa rerquisão (query)
            o response retorna uma resposta (params)
        */
        const { name, email, whatsapp, city, uf } = request.body
        /*
            podemos fazer a desistruturação da variável para separar nossos dados,
            assim garantimos que ele não vai enviar um dado que não queremos
        */
        
        const id = crypto.randomBytes(4).toString('HEX')
        /*
            geração de quatro bytes de caracteres aleatórios, 
            depois convertemos em uma String hexadecimal
        */

        await conection('ongs').insert({
            id,
            name,
            email,
            whatsapp,
            city,
            uf
        })
        /**
        * Aqui estamos inserindo dados na tabela 'ongs',
        * nota: temos que colocar os colunas que vamos inserir lá dentro
        */

        return response.json({ id })
    }
}

