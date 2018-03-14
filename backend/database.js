var mysql = require('mysql');

var connection = mysql.createConnection({
	host: 'cs411-tripoptimizer.c3jbpbfvqkol.us-east-2.rds.amazonaws.com',
	user: 'master',
	password: 'uiuccs411',
	database: 'Place',
	port: 3293
});
connection.connect((err)=>{
	if(err){
		throw err;
	}
	console.log("mySQL connected!");
});

module.exports = connection;