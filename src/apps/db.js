const mongoose = require('mongoose');
const path = require('path');

const pathToConfig = path.resolve('src', 'apps/config');
const config = require(pathToConfig);

function mongo() {
  console.log(config.mongo.uri);
	const mongoConnection = () => {
    mongoose.Promise = global.Promise;
    const conn = mongoose.connect(config.mongo.uri);
    conn.then(() => {
      console.log('Connected to mongo!');
    }).catch((err) => { console.error(err.message); });
  };
return mongoConnection();
}

module.exports = {
  mongo
}