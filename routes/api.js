const express = require('express');
const router = express.Router();
const { addResponse } = require('../controllers/responses.js')

router.post('/submit', addResponse);

module.exports = router;