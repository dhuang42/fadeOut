const Sequelize = require('sequelize')
const db = require('../db')

const Film = db.define('film', {
  title: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      notEmpty: true
    }
  },
  posterUrl: {
    type: Sequelize.TEXT,
    defaultValue: '/posters/no-poster.png'
  },
  director: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      notEmpty: true
    }
  },
  releaseDate: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      notEmpty: true
    }
  },
  runtime: {
    type: Sequelize.INTEGER,
    defaultValue: 0
  },
  logline: {
    type: Sequelize.TEXT,
    allowNull: false,
    validate: {
      notEmpty: true
    }
  }
})

module.exports = Film
