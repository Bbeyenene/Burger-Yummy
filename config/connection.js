var mysql = require("mysql");
var connection;

//create connection
if (process.env.JAWSB_URL) {
  connection = mysql.createConnection(process.env.JAWSB_URL);
} else {
  connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "Nathan@2015",
    database: "burgers_db",
  });
}
//connect the connection to mysql

connection.connect((err) => {
  if (err) console.error("error connecting: " + err.stack);
  return;
  console.log("connected as id: " + connection.threadId);
});
//export the connection to be used by other files
module.exports = connection;
