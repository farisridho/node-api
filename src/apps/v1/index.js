
const path = require('path');

const express = require('express')
const app = express();

const book = require('./book');

app.use('/book', book);


module.exports = app;