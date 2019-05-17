const express = require('express');
const router  = express.Router();
const Prodcut = require('../models/Product')

/* GET home page */
router.get('/', (req, res, next) => {
  res.render('index');
});

//CRUD


module.exports = router;

