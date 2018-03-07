const express = require('express')
const app = express()


app.get('/', function(req, res) {
  res.json('pong')
});

module.exports = app