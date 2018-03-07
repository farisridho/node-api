const mongoose = require('mongoose');
const paginate = require('mongoose-paginate');
const constant = require('./constant');


const Schema = mongoose.Schema;
const { ObjectId } = Schema.Types;


/**
 * Book Schema
 */

BookSchema = new Schema({
  _type: { type: String, default: 'Book' },
  idBook: {type: String, default: constant.EMPTY_STRING },
  title: String,
  genre: String,
  author: String,
  createdAt: { type: Date, default: Date.now },
	updatedAt: { type: Date, default: Date.now },
},{
  collection: 'books',
});
BookSchema.plugin(paginate);
module.exports = mongoose.model('Book', BookSchema);