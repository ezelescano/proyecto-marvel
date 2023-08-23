const { Sequelize } = require("sequelize");
const userModel = require("./models/user");
const marvelHeroModels = require("./models/MarvelHero")
require("dotenv").config();

const { DB_NAME, DB_USER, DB_PASSWORD, DB_HOST } = process.env;

const sequelize = new Sequelize(
    `postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/${DB_NAME}`, { logging: false }
);

userModel(sequelize);
marvelHeroModels(sequelize);

const { Marvelhero, User } = sequelize.models;

 
module.exports = { sequelize, ...sequelize.models };