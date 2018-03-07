const path = require('path');

const express = require('express');

const app = express();

//const createSchema = require('./validations/create.schema');

/** 
const deleteHandler = require('./controllers/delete');
const detailHandler = require('./controllers/detail');
const updateHandler = require('./controllers/update');
 * 
*/
const listHandler = require('./controllers/list');

const createHandler = require('./controllers/create');

app.post('/', createHandler);

// app.delete('/:departmentId', deleteHandler);

// app.get('/:departmentId', detailHandler);
app.get('/', listHandler);

// app.put('/:departmentId', updateHandler);


module.exports = app;