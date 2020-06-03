const mysql = require('mysql');

const requeteInsert = "INSERT INTO messages (Message, User, Heure) VALUES ?"; 

let connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "Password12",
    database: "bot-discord"
  });
  
  connection.connect(function(err) {
    if (err) throw err;
    console.log("Connected !");
  });

  exports.Insert = (values)=>{
      connection.query(requeteInsert, [values])
  }