const Sequelize = require("sequelize");

const db = require("../database/db");

const Tpersonas= require("./tipo_personas")

module.exports = db.sequelize.define("persona", {
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  nombres: {
    type: Sequelize.STRING
  },
  apellidos:{
      type: Sequelize.STRING
  },
  direccion:{
      type:Sequelize.STRING
  },
  correo:{
      type:Sequelize.STRING
  },
  clave:{
      type:Sequelize.STRING
  },
  idTipoPersona:{
      type:Sequelize.INTEGER,
      references:{
          model:Tpersonas,
          key:'id'
      }
  }
});