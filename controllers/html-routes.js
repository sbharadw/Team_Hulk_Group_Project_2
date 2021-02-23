const express = require('express');
const path = require('path')
const router = express.Router();


// Requiring our custom middleware for checking if a user is logged in
const isAuthenticated = require("../config/middleware/isAuthenticated");

//landing page get
router.get('/', (req, res) =>{
    res.render('../views/homepage');
})

//registration page get
router.get('/register', (req, res) =>{
    res.render('../views/register')
})

//login page get
router.get('/log-in', (req, res) =>{
    res.render('../views/log-in')
})

//sell item page get
router.get('/buy', isAuthenticated, (req, res) =>{
    res.render('../views/sell')
})

//about page get
router.get('/about', (req, res) =>{
    res.render('../views/about')
})

//forgot password page get
router.get('forgot_password', (req, res) =>{
    res.render('../views/forgot_password')
})


module.exports = router;