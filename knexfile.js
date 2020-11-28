const { dbpass, dbname, dbuser } = require('./config.json');

module.exports = {

	development: {
		client: 'mysql',
		connection: {
			host: '127.0.0.1',
			user: dbuser,
			password: dbpass,
			database: dbname,
			charset: 'utf8',
		},
	},

	production: {
		client: 'mysql',
		connection: {
			host: '127.0.0.1',
			user: dbuser,
			password: dbpass,
			database: dbname,
			charset: 'utf8',
		},
	},
};