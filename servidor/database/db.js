const Sequelize = require("sequelize");

const db = {};

<<<<<<< HEAD
const sequelize = new Sequelize("scooter", "root", "12345678", {
=======
const sequelize = new Sequelize("scooter", "root", "1234", {
>>>>>>> 87c38a06fab84e3e9c6d6d748e8a9725199bd7f3
  host: "localhost",
  dialect: "mysql",
  define: {
    timestamps: false
  },
  operatorsAliases: false,

  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  }
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;
