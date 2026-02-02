const express = require('express');
const dotenv = require('dotenv')
const apiRoutes = require('./routes/api');

dotenv.config();
const app = express();

// middleware crap
app.use(express.urlencoded({ extended: true }));
app.use(express.json()); 

// static files
app.use('/', express.static('pub'));

// api
app.use('/api', apiRoutes);

module.exports = app;