const morgan = require("morgan");
const express = require("express");
const layout = require("./views/layout");
const { db, Page, User } = require("./models");

const wikiRouter = require("./routes/wiki");
const userRouter = require("./routes/users");
// const { User } = require('./views');
const app = express();
app.use(morgan("dev"));
app.use(express.static(__dirname + "/public")); //comeback

app.use(express.urlencoded({ extended: false }));
app.use("/wiki", wikiRouter);
app.use("/users", userRouter);

db.authenticate().then(() => {
  console.log("connected to the database");
});

app.get("/", (req, res) => {
  res.redirect('/wiki')
});

const PORT = 1337;

const init = async () => {
  await db.sync({ force: true });
  // make sure that you have a PORT constant
  app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}!`);
  });
};

init();

// const PORT = 1337;

// app.listen(PORT, () => {
//   console.log(`App listening in port ${PORT}`);
// });
