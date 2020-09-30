var mysql = require("mysql");
  //create connection
  connection = mysql.createConnection({
      host: "localhost",
      port: 3306,
      user: "root",
      password: "",
      database: "burgers_db"
  });
//connect the connection to mysql
connection.connect(function(err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id: " + connection.threadId);
});
//export the connection to be used by other files
module.exports = connection;