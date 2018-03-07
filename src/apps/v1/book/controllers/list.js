/* eslint-disable indent */

/*
USE ABSOLUTE IMPORT NOT RELATIVE, UNLESS YOU HAVE PARANORMAL ABILITY!!
*/
const path = require('path');

const co = require('co');
const httpStatus = require('http-status-codes');
const paginate = require('express-paginate');

const pathToBookService = path.resolve('src', 'apps/v1/book/services');
const bookService = require(pathToBookService);

module.exports = (req, res) => {
  co(function* _() {
    const { limit = 10, page = 1, sortField = 'createdAt', sortOrder = -1 } = req.query;

    const book = yield bookService.list({
      limit: parseInt(limit, 10),
      page: parseInt(page, 10),
      sortField,
      sortOrder,
    });

    if (book === null) { // if man power not found
      return res.status(httpStatus.NOT_FOUND).jsend.error('Book not found');
    }
    return res.status(httpStatus.OK).jsend.success({
      limit: book.limit,
      totalResults: book.total,
      results: book.docs,
      pageCount: book.pages,
      pages: paginate.getArrayPages(req)(3, book.pages, book.page),
    });
  })
  .catch(err => res.status(httpStatus.INTERNAL_SERVER_ERROR).jsend.error(err));
};
