const addPage = require("./addPage");
const editPage = require("./editPage");
const main = require("./main");
const userList = require("./userList");
const userPages = require("./userPages");
const wikiPage = require("./wikiPage");
const { db } = require('./models');
const { Sequelize } = require("sequelize/types");


const User = db.define('user', {
  name: {
    type:Sequelize.STRING
  },
  email: {
    type: Sequelize.STRING
  }

})

const Page = db.define('page', {
  title: {
    type:Sequelize.STRING
  },
  slug: {
    type:Sequelize.STRING

  },
  content: {
    type:Sequelize.TEXT
  },
  status: {
    type:Sequelize.ENUM('open', 'closed')
  }
})


module.exports = { addPage, editPage, main, userList, userPages, wikiPage, db, Page, User };
