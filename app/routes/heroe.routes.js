var express = require('express');
var heroeController = require('../controllers/heroe.controller');

var api = express.Router();

api.get('/pb',heroeController.pruebas);
api.post('/save',heroeController.saveHeroe);
api.put('/edit',heroeController.actualizarHeroe);
api.delete('/delete',heroeController.eliminarHeroe);
api.post('/find',heroeController.findHeroe);

module.exports = api;