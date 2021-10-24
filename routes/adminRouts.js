const express = require('express');
const router = express.Router();
const adminController = require('../controller/adminController');

const MongoStore = require('connect-mongo');
const session = require('express-session');

// create a cookie 
const dbURL = 'mongodb+srv://ebubeker:835ht1mi909@ebubekercluster.nvx9w.mongodb.net/admindb?retryWrites=true&w=majority'

const store = MongoStore.create({ mongoUrl: dbURL });

router.use(session({
    secret: 'secret',
    cookie: { maxAge: 24 * 60 * 60 * 1000 },
    saveUninitialized: false,
    resave: true,
    store,
}));

router.get('/admin22042004', adminController.getAdmin);

router.get('/login', adminController.login);

router.get('/editProject', adminController.getProducts);

router.get('/editCv', adminController.getCv);

router.get('/editAbout', adminController.getAbout);

router.post('/editProject', adminController.postRequestProjects);

router.post('/editCv', adminController.postRequestCv);

router.post('/editAbout', adminController.postRequestAbout);

router.post('/login', adminController.postLogin);

router.post('/home', adminController.subscription);


module.exports = router;