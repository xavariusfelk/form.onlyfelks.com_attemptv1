const express = require('express');
const dotenv = require('dotenv')
const apiRoutes = require('./routes/api');
const indexRoutes = require('./routes/index');

dotenv.config();
const app = express();

// middleware crap
app.use(express.urlencoded({ extended: true }));
app.use(express.json()); 

// view engine
app.set('view engine', 'pug')

// static files
app.use('/assets', express.static('assets'));

// routes
app.use('/api', apiRoutes);
app.use('/', indexRoutes)

module.exports = app;