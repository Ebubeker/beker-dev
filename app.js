const express = require('express');
const path = require('path');
const mongoose = require('mongoose');
const { response } = require('express');

const PORT = process.env.PORT || 5000;

const app = express();

//register view engine
app.set('view engine', 'ejs');

//Make file public
app.use(express.static(path.join(__dirname, '/public')));

app.get('/', (req, res) => {
    res.redirect('/home');
});

app.get('/home', (req, res) => {
    res.render('index', { title: "Home" });
});


app.listen(PORT, () => console.log(`Server started on port: ${PORT}`));