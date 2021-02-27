const express = require('express');
const path = require('path')
const router = express.Router();


// Requiring our custom middleware for checking if a user is logged in
const isAuthenticated = require("../config/middleware/isAuthenticated");

//landing page get
router.get('/', (req, res) => {
    if(req.user){
        res.redirect("/homepage");
    }
    res.sendFile(path.join(__dirname, "../public/login.html"))
})

//homepage item page get
router.get('/homepage', isAuthenticated, (req, res) =>{

    console.log('homepage route sent SSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSS')

res.sendFile(path.join(__dirname, "../public/homepage.html"))
})

//buy item page get
router.get('/buy', (req, res) =>{
    res.sendFile(path.join(__dirname, "../public/buy.html"))
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