const Service = require('../setup/SETUP_O')

const getOrders = (sequelize, { DataTypes }) => {
    const Order = sequelize.define('orders', {
        username: {
            type: DataTypes.STRING,
            unique: true,
            allowNull: false,
            validate: {
                notEmpty: true,
            },
        },
    });

    return User;
};

export default getOrders;