const express = require('express');
const router = express.Router();
const homeController = require('../controller/homeController');


router.get('/', (req, res) => {
    res.redirect('/home');
});


router.get('/home', homeController.home);

module.exports = router;