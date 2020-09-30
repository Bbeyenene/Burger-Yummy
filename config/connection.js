var mysql = require("mysql");
  //creating connection to mysql workbench 
  connection = mysql.createConnection({
      host: "localhost",
      port: 3306,
      user: "root",
      password: "Nathan@2015",
      database: "burgers_db"
  });
//connect the connection
connection.connect(function(err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id: " + connection.threadId);
});
//export the connection to be used by the different routes for the interaction b/n mysql and body like terminal or browser
module.exports = connection;