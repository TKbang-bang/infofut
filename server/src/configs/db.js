const mysql = require("mysql2");

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "soytk",
  database: "players2_db",
});

module.exports = db;
