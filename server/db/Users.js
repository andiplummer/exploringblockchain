const Sequelize = require('sequelize')
const { db } = require('./index')

const Users = db.define('users', {
  name: {
    type: Sequelize.STRING
  }
})

module.exports = { Users }