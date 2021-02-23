// Dependencies
const express = require('express');
const router = express.Router();
//var passport = require("../config/passport");

// Grabbing our models
const db = require('../models');

// Routes

// TABLE Order

/**
 * @method
 * @description POST route for saving a new order to Order TABLE
 * @param api url, function with request and response parameters 
 * @var dbOrder - response for Order table
 */
router.post('/api/orders', (req, res) => {
  db.Order.create({
    date: req.body.date,
    price: req.body.price,
    shipping_address: req.body.shipping_address,
    shipping_city: req.body.shipping_city,
    shipping_state: req.body.shipping_state,
    item_id: req.body.item_id,
    buyer_id: req.body.buyer_id,
    seller_id: req.body.seller_id,
    shipping_id: req.body.shipping_id,
  }).then((dbOrder) => res.json(dbOrder));
});

/**
 * @method
 * @description GET route for finding one Order and return his information from Order TABLE
 * @param api url, function with request and response parameters 
 * @var dbOrder - response for Order table
 */
router.get('/api/Orders/:id', (req, res) => {
  db.Order.findOne({
    where: {
      id: req.params.id,
    },
  }).then((dbOrder) => res.json(dbOrder));
});

/**
 * @method
 * @description GET route for finding all Orders and return their information 
 * @param api url, function with request and response parameters 
 * @var dbOrder - response for Order table
 */
router.get('/api/Orders', (req, res) => {
  db.Order.findAll({}).then((dbOrder) => res.json(dbOrder));
});

/**
 * @method
 * @description DELETE route for removing Order with by his id
 * @param api url, function with request and response parameters 
 * @var dbOrder - response for Order table
 */
router.delete('/api/Orders/:id', (req, res) => {
  db.Order.destroy({
    where: {
      id: req.params.id,
    },
  }).then((dbOrder) => res.json(dbOrder));
});

/**
 * @method
 * @description PUT route for updating Order by his id
 * @param api url, function with request and response parameters 
 * @var dbOrder - response for Order table
 */
router.put('/api/Orders/:id', (req, res) => {
  db.Order.update(
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
  ).then((dbOrder) => res.json(dbOrder));
});

module.exports = router;



