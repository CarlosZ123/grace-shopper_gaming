const db = require("../db");
const Sequelize = require('sequelize');
const Products = require("./products");

const Categories = db.define('category', {
    category: {
        type: Sequelize.STRING,
        allowNull: false,
        validate: {
            notEmpty: true
        }
    },
    productId: {
        type: Sequelize.INTEGER,
        references: {
            model: Products,
            key: 'id'
        }
    }
})
module.exports = Categories
