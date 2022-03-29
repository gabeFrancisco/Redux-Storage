const Sequelize = require("sequelize");
const connection = require("../database")

const Notifications = connection.define("notifications", {
  title: {
    type: Sequelize.STRING,
    allowNull: false
  },
  message: {
    type: Sequelize.STRING,
    allowNull: false
  },
  color: {
    type: Sequelize.STRING,
    allowNull: false
  }
})

Notifications.sync({force: false})

module.exports = Notifications