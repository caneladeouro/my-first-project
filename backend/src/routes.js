const express = require('express')

const OngController = require('./controllers/OngController')
const IncidentController = require('./controllers/IncidentController')
const ProfileController = require('./controllers/ProfileController')
const SessionController = require('./controllers/SessionController')

const routes = express.Router()
//Aqui eu separo o modo de rotas do express em uma nova variável

routes.post('/sessions', SessionController.create)

routes.get('/ongs', OngController.index)
//selecionamos a função colocando depois da variável sua respectiva função 
routes.post('/ongs', OngController.create)

routes.get('/profile', ProfileController.index)

routes.post('/incidents', IncidentController.create)
routes.get('/incidents', IncidentController.index)
routes.delete('/incidents/:id', IncidentController.delete)

module.exports = routes
//Aqui eu exporto as minhas rotas através da variável 'routes', é assim que se faz no node