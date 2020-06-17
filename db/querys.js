const mysql = require('mysql');
const connection = mysql.createConnection({
  host:'localhost',
  user:'root',
  password:'hackreactor',
  database:'purrget'
})

connection.connect((err) => {
  if(err) {
    console.log('Error connecting to the database:', err);
  } else {
    console.log('Connected to the purrget database');
  }
})

module.exports = connection;