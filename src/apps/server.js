const db = require('./db')

function Server(app, port, ip) {
	app.listen(port, ip, () => {
		console.log('=======================');
		
		console.log(`APP_PORT: ${port}`)
		console.log(`APP_IP: ${ip}`)
		
		console.log('=======================');

	});

}

module.exports = Server
