const Sequelize = require('sequelize')

const connection = new Sequelize('redux_storage', 'root', '1234', {
  host: 'localhost',
  dialect: 'mysql'
})

module.exports = connection