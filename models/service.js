const Service = require('../setup/SETUP_S')

const { Sequalize } = require('sequelize');

//const sequelize = new Sequelize('postgresql://fwtbpmva:d498ee036dbd5c5537e4@128.214.253.167:5432/fwtbpmva')
const sequelize = new Sequelize('postgresql://fwtbpmva:d498ee036dbd5c5537e4@128.214.253.167:5432/fwtbpmva')

const getServices = await Service.findAll();

module.exports = mongoose.model('Service', getServices)