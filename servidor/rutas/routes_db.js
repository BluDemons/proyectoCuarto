const express = require("express");
let api = express.Router(),
  control = require("../controles/crud");

api.get("/scooter", control.getDatos);
api.post("/scooter", control.postDatos);
api.put("/scooter", control.updateDatos);
api.delete("/scooter", control.deleteDatos);
api.get("/scooterById", control.getDatosbyID);

module.exports = api;
