var mysql = require('mysql');

var connection = mysql.createConnection({
	host: 'localhost',
	user: 'root',
	password: 'password',
	database: 'articles'
});
connection.connect();

module.exports = {
	connection: connection
};