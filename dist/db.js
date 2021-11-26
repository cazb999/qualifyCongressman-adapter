"use strict";
const Sequelize = require('sequelize');
const FilmModel = require('./models/films');
const sequelize = new Sequelize('congressman', 'root', 'root', {
    host: '127.0.0.1',
    dialect: 'mysql',
    port: 33060
});
const Film = FilmModel(sequelize, Sequelize);
sequelize.sync({ force: false }).then(() => {
    console.log('Tabla sincronizada');
});
module.exports = {
    Film
};
//# sourceMappingURL=db.js.map