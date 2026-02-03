const express = require('express');
const dotenv = require('dotenv')
const apiRoutes = require('./routes/api');

dotenv.config();
const app = express();

// middleware crap
app.use(express.urlencoded({ extended: true }));
app.use(express.json()); 

// view engine
app.set('view engine', 'pug')

// static files
app.use('/assets', express.static('assets'));

app.get('/', (req, res) => {
    res.render('index')
})

// api
app.use('/api', apiRoutes);

module.exports = app;