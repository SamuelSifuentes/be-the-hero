const express = require('express');
const crypto = require('crypto');
const ongController = require('./controllers/OngController')
const IncidentController = require('./controllers/IncidentController')
const ProfileController = require('./controllers/ProfileController')
const SessionController = require('./controllers/SessionController')
const connection = require('./database/connection')

const routes = express.Router();

routes.get('/ongs', ongController.index)

routes.post('/ongs',ongController.create)
routes.post('/incidents',IncidentController.create);
routes.get('/incidents',IncidentController.index);
routes.get('/incidents',IncidentController.index);
routes.delete('/incidents/:id',IncidentController.delete);
routes.get('/profile',ProfileController.index);
routes.post('/sessions',SessionController.create);
module.exports = routes;
