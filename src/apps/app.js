const app = require('./middlewares')
const AppServer = require('./server')
const Config = require('./config')

const Db = require('./db')

const ping = require('./ping')
const v1 = require('./v1')


// routing
app.use('/ping', ping);
app.use('/v1', v1)

try {
   // start the engine
  AppServer(app, Config.app.port, Config.app.ip);
  
  // Connect Database
  Db.mongo();
 
} catch (err) {
  console.error(err); // eslint-disable-line no-console
}
