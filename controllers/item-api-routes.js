// Dependencies
const express = require('express');
const router = express.Router();
const multer = require('multer');
const uploads = multer({dest: '/uploads'})
const fs = require('fs')

// Grabbing our models
const db = require('../models');

const bodyparser = require('body-parser');

// Routes

// TABLE Item 

/**
 * @method
 * @description POST route for creating a new item to Item TABLE
 * @param api url, function with request and response parameters 
 * @var dbItem - response for Item table
 */
router.post('/api/sell', (req, res) => {

console.log("requested body ===========" + JSON.stringify(req.user))
    db.Item.create({
      title: req.body.title,
      description: req.body.description,
      item_type: req.body.item_type,
      user_id: req.user.id,
      item_category: req.body.item_category,  
    })
    .then((dbItem) =>{
      return res.json(dbItem)
    });

  });
  
  /**
   * @method
   * @description GET route for finding one item and return the information from Item TABLE
   * @param api url, function with request and response parameters 
   * @var dbItem - response for Item table
   */
  router.get('/api/items/:id', (req, res) => {
    db.Item.findOne({
      where: {
        id: req.params.id,
      },
      include: [db.User],
    }).then(
      (dbItem) => res.json(dbItem)
      
      );
  });

  /**
 * @method
 * @description GET route for getting all items and shows them to user
 * @param api url, function with request and response parameters 
 * @var dbItem - response for Item table
 */
  router.get('/api/items', (req, res) => {
    db.Item.findAll({}).then((dbItem) => { res.json(dbItem)});
  });


  
  /**
   * @method
   * @description DELETE route for removing item by id
   * @param api url, function with request and response parameters 
   * @var dbItem - response for Item table
   */
  router.delete('/api/items/:id', (req, res) => {
    db.Item.destroy({
      where: {
        id: req.params.id,
      },
    }).then((dbItem) => res.json(dbItem));
  });
  
  /**
   * @method
   * @description PUT route for updating item by the id
   * @param api url, function with request and response parameters 
   * @var dbItem - response for Item table
   */
  router.put('/api/items/:id', (req, res) => {
    db.Item.update(
      {
        title: req.body.title,
        description: req.body.description,
        item_type: req.body.item_type,
        user_id: req.body.user_id,
        item_category_id: req.body.item_category_id,  
      },
      {
        where: {
          id: req.body.id,
        },
      }
    ).then((dbItem) => res.json(dbItem));
  });



module.exports = router;