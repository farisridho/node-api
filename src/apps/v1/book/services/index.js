/* eslint-disable indent */

/*
USE ABSOLUTE IMPORT NOT RELATIVE, UNLESS YOU HAVE PARANORMAL ABILITY!!
*/
const path = require('path');

const pathToBookModel = path.resolve('src', 'apps/v1/book/models');
const BookModel = require(pathToBookModel);

class BookService {

	static list({ limit = 50, page = 1, sortField = 'createdAt', sortOrder = -1, query = {} } = {}) {
		try {
      const options = {
        sort: { sortField: sortOrder },
        limit,
        page,
      };
			const results = BookModel.paginate(query, options);
			console.log('results :', results)
			return results;
		} catch (e) {
			throw e;
		}
	}

}

module.exports = BookService;