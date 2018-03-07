const mongoose = require('mongoose');
const path = require('path');

const pathToConfig = path.resolve('src', 'apps/config');
const config = require(pathToConfig);

const mongoConnection = () => {
  mongoose.Promise = global.Promise;
  const conn = mongoose.connect(config.mongo.uri);
  conn.then(() => {
    console.log('Connected to mongo!');
  }).catch((err) => { console.error(err.message); });
};

module.exports = {
  mongo: mongoConnection
};