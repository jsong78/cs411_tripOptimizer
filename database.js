var mysql = require('mysql');

var connection = mysql.createConnection({
	host: 'localhost',
	user: 'master',
	password: 'uiuccs411',
	database: 'Place'
});
connection.connect((err)=>{
	if(err){
		throw err;
	}
	console.log("mySQL connected!");
});
