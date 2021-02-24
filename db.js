const mysql = require("mysql");

// Create a connection to the database
var connection = mysql.createConnection({
    host     : 'localhost',
    user     : 'root',
    password : '',
    database : 'alrand'
});
//1.5.2.1

connection.connect((err) => {
    if(err){
      console.log(err)
      console.log('Error connecting to Db');
      return;
    }
    console.log('Connection established');


});
module.exports = connection;
