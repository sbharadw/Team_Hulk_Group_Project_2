// Dependencies
const express = require('express');
const router = express.Router();
var passport = require("../config/passport");

// Grabbing our models

const db = require('../models');


// Routes

//finds all items and shows user
router.get('/api/items', (req, res) =>{
  db.Items.findAll({}).then((items_db) => {
    res.json(items_db);
  });
});


module.exports = router;
