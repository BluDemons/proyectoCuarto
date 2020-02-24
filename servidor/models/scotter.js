const Sequelize = require("sequelize");

const db = require("../database/db");

module.exports=db.sequelize.define("scooters",{
    id:{
      type:Sequelize.INTEGER,
      primaryKey:true,
      autoIncrement:true
    },
    descripcion:{
      type:Sequelize.STRING
    },
    estado:{
      type:Sequelize.BOOLEAN
    },
    imagen:{
      type:Sequelize.STRING
    },
    codigo:{
      type:Sequelize.STRING
    }
  });
  