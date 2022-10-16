const Service = require('../setup/SETUP_S')

const { Sequelize } = require('sequelize');

//const sequelize = new Sequelize('postgresql://fwtbpmva:d498ee036dbd5c5537e4@128.214.253.167:5432/fwtbpmva')
const sequelize = new Sequelize('postgresql://fwtbpmva:d498ee036dbd5c5537e4@128.214.253.167:5432/fwtbpmva')

module.exports = (sequelize) => {

    Service.findOrCreate({
        where: {
            name: data[0],
            price: data[1],
            available: data[2]
        },
    }).then(([user, created]) => {
        console.log(user.firstName); // John
        console.log(user.lastName); // undefined
        console.log(created); // true
    });

    return getServices;
}