const express = require('express');
const path = require('path')
const router = express.Router();

//landing page get
router.get('/', (req, res) =>{
    res.render('../views/homepage.handlebars');
})

//registration page get
router.get('/register', (req, res) =>{
    res.render('../views/register.handlebars')
})

//login page get
router.get('/log-in', (req, res) =>{
    res.render('../views/log-in.handlebars')
})

//sell item page get
router.get('/sell', (req, res) =>{
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