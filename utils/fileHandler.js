const fs = require('fs');
const dotenv = require('dotenv');

dotenv.config();
const JSON_FILE = process.env.JSON_FILE;

// TODO: add some kind fo safety or proper DB as overkill

function readResponses() {
    const data = fs.readFileSync(JSON_FILE, 'utf-8');
    return JSON.parse(data);
}

function appendResponse(data) {
    fs.writeFileSync(JSON_FILE, JSON.stringify(data, null, 2))
}

module.exports = { 
    readResponses, appendResponse 
}