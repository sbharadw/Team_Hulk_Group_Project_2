// Dependencies
const express = require('express');
const router = express.Router();
const passport = require("../config/passport");

// Grabbing our models
const db = require('../models');

// Routes

// TABLE User

/**
 * @method
 * @description POST route for saving a new user to User TABLE
 * @param api url, function with request and response parameters 
 * @var dbUser - response for User table
 */
router.post('/api/users', (req, res) => {
  db.User.create({
    first_name: req.body.first_name,
    password: req.body.password,
    last_name: req.body.last_name,
    email: req.body.email,
    address: req.body.address,
    city: req.body.city,
    state: req.body.state,
    zipcode: req.body.zipcode,
    cell_number: req.body.cell_number
  }).then((dbUser) => res.json(dbUser));
});

/**
 * @method
 * @description GET route for finding one user and return his information from User TABLE
 * @param api url, function with request and response parameters 
 * @var dbUser - response for User table
 */
router.get('/api/users/:id', (req, res) => {
  db.User.findOne({
    where: {
      id: req.params.id,
    },
  }).then((dbUser) => res.json(dbUser));
});

/**
 * @method
 * @description GET route for finding all users and return their information 
 * @param api url, function with request and response parameters 
 * @var dbUser - response for User table
 */
router.get('/api/users', (req, res) => {
  db.User.findAll({}).then((dbUser) => res.json(dbUser));
});

/**
 * @method
 * @description DELETE route for removing user with by his id
 * @param api url, function with request and response parameters 
 * @var dbUser - response for User table
 */
router.delete('/api/users/:id', passport.authenticate("local"), (req, res) => {
  db.User.destroy({
    where: {
      id: req.params.id,
    },
  }).then((dbUser) => res.json(dbUser));
});

/**
 * @method
 * @description PUT route for updating user by his id
 * @param api url, function with request and response parameters 
 * @var dbUser - response for User table
 */
router.put('/api/users/:id', passport.authenticate("local"), (req, res) => {
  db.User.update(
    {
      first_name: req.body.first_name,
      last_name: req.body.last_name,
      email: req.body.email,
      address: req.body.address,
      city: req.body.city,
      state: req.body.state,
      zipcode: req.body.zipcode,
      cell_number: req.body.cell_number
    },
    {
      where: {
        id: req.body.id,
      },
    }
  ).then((dbUser) => res.json(dbUser));
});

router.post('/api/UserLogin',(req, res) => {
  db.UserLogin.create(
    {
      email: req.body.email,
      password: req.body.password
    }
  ).then((dbUserLogin) => res.json(dbUserLogin))
});

module.exports = router;
