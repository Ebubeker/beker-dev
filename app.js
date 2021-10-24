const express = require('express');
const path = require('path');
const mongoose = require('mongoose');
const adminRoutes = require('./routes/adminRouts');
const homeRouts = require('./routes/homeRouts');



const PORT = process.env.PORT || 5000;

const app = express();

// connect to mongodb
const dbURL = 'mongodb+srv://ebubeker:835ht1mi909@ebubekercluster.nvx9w.mongodb.net/admindb?retryWrites=true&w=majority'
mongoose.connect(dbURL, { useNewUrlParser: true, useUnifiedTopology: true })
    .then((result) => app.listen(PORT, () => console.log(`DB & -Server started on port: ${PORT}`)))
    .catch((err) => console.log(err));




//register view engine
app.set('view engine', 'ejs');

app.use(express.urlencoded({ extended: true }))
    //Make file public
app.use(express.static(path.join(__dirname, '/public')));

app.use(homeRouts);



app.use(adminRoutes);