const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('postgresql://fwtbpmva:d498ee036dbd5c5537e4@128.214.253.167:5432/fwtbpmva')

module.exports = (sequelize) => {
        const Service = sequelize.define("Services", {
            name: {
                type: Sequelize.STRING,
            },
            price: {
                type: Sequelize.FLOAT,
            },
            available: {
                type: Sequelize.BOOLEAN
            }
        });

        return Service
    }
    /*(async() => {
        await sequelize.sync().then(() => {

            let response;
            Service.create({
                name: req.name,
                price: req.price,
                available: req.available
            }).then(res => {
                response = res;
                console.log(error)
            }).catch((error) => {
                response = ('Failed: ', error)
                console.log(error)
            });
        }).catch((error) => {
            console.log(error)
        });

    })();
    return response;*/