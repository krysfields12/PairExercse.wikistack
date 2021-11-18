
const express = require("express");
const router = express.Router();
const addPage = require('../views/addPage')
const layout = require("../views/layout");
const { Page } = require("../models");




router.get("/", async (req, res, next) => {
res.send(layout())

});

router.post ('/', async (req, res, next) =>{

  try {
    const page = await Page.create({
      title: req.body.title,
      content: req.body.content
    });
    res.redirect('/');
  } catch (error) { next(error) }

  //console.log(res.json(req.body))
  //console.log(res.send('got to POST /wiki/'))

})

router.get('/add', (req, res, next) => {
  res.send(addPage())

})

module.exports = router
