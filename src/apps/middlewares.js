/* eslint-disable import/newline-after-import */

/*
	Register all default middlewares
*/
const config = require('./config');
const express = require('express');
const Raven = require('raven');
const middleware = express();

/*
  Setup and install Sentry/Raven middlewares
  and fallthough inside our express's app.
  See: https://docs.sentry.io/clients/node/integrations/express/
*/
Raven.config(config.sentry.dsn).install();
middleware.use(Raven.requestHandler());
middleware.use(Raven.errorHandler());
middleware.use((err, req, res, next) => { // eslint-disable-line no-unused-vars
  res.statusCode = 500;
  res.end(`${res.sentry} \n`);
});

/*
	manage req.body properties
	doc: https://expressjs.com/en/resources/middleware/body-parser.html
*/
const bodyParser = require('body-parser');
middleware.use(bodyParser.json());
middleware.use(bodyParser.urlencoded({ extended: false }));

/*
	enable cors
	doc: https://expressjs.com/en/resources/middleware/cors.html
*/
const cors = require('cors');
const corsOptions = {
	optionSuccessStatus: 200, // manage on legacy browsers that always return 204
	preflightContinue: false, // pass the cors preflight response to the next handler
};
middleware.use(cors(corsOptions));

/*
	enable morgan - http request logger
	doc: https://expressjs.com/en/resources/middleware/morgan.html
*/
const morgan = require('morgan');
const morganFormatter = ':method :url :status - :response-time ms';
middleware.use(morgan(morganFormatter));

/*
	enable helmet - secure our express
	doc: https://www.npmjs.com/package/helmet
*/
const helmet = require('helmet');
middleware.use(helmet());

/*
	enable jsend - as our standart json response
	doc: https://www.npmjs.com/package/jsend
*/
const jsend = require('jsend');
middleware.use(jsend.middleware);


/*
  enable pagination - paginate middleware
  doc: https://github.com/expressjs/express-paginate#paginate
 */

const paginate = require('express-paginate');
middleware.use(paginate.middleware());

/*
const debuggerWare = require('./commons/middlewares/debugger');
middleware.use(debuggerWare.debug);
*/
module.exports = middleware;
