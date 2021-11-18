const Sequelize = require("sequelize");
const db = new Sequelize("postgres://localhost:5432/wikistack", {
  logging: false,
});

const User = db.define("user", {
  name: {
    type: Sequelize.STRING,
    allowNull: false,
    defaultValue: 'Big Bird'
  },
  email: {
    type: Sequelize.STRING,
    allowNull: false,
    defaultValue: 'Sesame Street'
  },
});

const Page = db.define("page", {
  title: {
    type: Sequelize.STRING,
    allowNull: false,
    defaultValue: 'Why yellow feathers are the BEST feathers!'
  },
  slug: {
    type: Sequelize.STRING,
    allowNull: false
  },
  content: {
    type: Sequelize.TEXT,
    allowNull: false,
    defaultValue: `Just touch 'em!`
  },
  status: {
    type: Sequelize.ENUM("open", "closed"),
    defaultValue: 'open'
  },
});

module.exports = {
  db,
  Page,
  User,
};
