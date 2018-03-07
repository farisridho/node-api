/* eslint-disable indent */

/*
USE ABSOLUTE IMPORT NOT RELATIVE, UNLESS YOU HAVE PARANORMAL ABILITY!!
*/
const path = require('path');

const co = require('co');
const httpStatus = require('http-status-codes');
const paginate = require('express-paginate');

const pathToBookModel = path.resolve('src', 'apps/v1/book/models');
const bookModel = require(pathToBookModel)

// const pathToBookService = path.resolve('src', 'apps/v1/book/services');
// const bookService = require(pathToBookService);

module.exports = (req, res) => {
  co(function* _() {
    const { limit = 10, page = 1, sortField = 'createdAt', sortOrder = -1 } = req.query;
    
    // const book = yield bookService.list({
    //   query: req.query,
    //   limit: parseInt(limit, 10),
    //   page: parseInt(page, 10),
    //   sortField,
    //   sortOrder,
    // });
    const NewBook = new bookModel(req.body);
    const Book = yield NewBook.save();

    return res.status(httpStatus.CREATED).jsend.success(Book);
  })
  .catch(err => res.status(httpStatus.INTERNAL_SERVER_ERROR).jsend.error(err));
};
