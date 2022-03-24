const Sequelize = require('sequelize')
const connection = require('../database')

const Categories = connection.define('categories', {
  name: {
    type: Sequelize.STRING,
    allowNull: false
  },
  color: {
    type: Sequelize.STRING,
    allowNull: false
  },
})

Categories.sync({force: false})

module.exports = Categories