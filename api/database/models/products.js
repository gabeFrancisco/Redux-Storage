const Sequelize = require('sequelize')
const connection = require('../database')

const Products = connection.define('products', {
  name: {
    type: Sequelize.STRING,
    allowNull: false
  },
  category: {
    type: Sequelize.STRING,
    allowNull: false
  },
  quantity: {
    type: Sequelize.INTEGER,
    allowNull: false
  },
  price: {
    type: Sequelize.DECIMAL,
    allowNull: false
  }
})

Products.sync({force: false})

module.exports = Products