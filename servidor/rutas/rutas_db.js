;
const express = require('express')
let api = express.Router(),
  control = require('../controles/crud')

api.get('/thws', control.getDatos)
api.post('/thws', control.postDatos)
api.put('/thws', control.updateDatos)
api.delete('/thws', control.deleteDatos)

api.post('/login', control.login)

module.exports = api