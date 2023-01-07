const { Model, DataTypes } = require('sequelize');

const sequelize = require('../../develop/config/connection.js');

class Category extends Model {}

Category.init(
    {
        id: {
            // always set type first
            type: DataTypes.INTEGER,
            // other characteristics
            allowNull: false,
            primaryKey: true,
            autoIncrement: true

        },
        category_name: {
            type: DataTypes.STRING,
            allowNull: false
        },
    },
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'category'
    }
)

module.exports = Category