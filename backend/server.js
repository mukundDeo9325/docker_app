const express = require("express");
const mysql = require("mysql2");

const app = express();

const db = mysql.createConnection({
  host: "db",
  user: "root",
  password: "root",
  database: "appdb"
});

app.get("/", (req, res) => {
  db.query("SELECT message FROM test", (err, result) => {
    if (err) return res.send("DB error");
    res.send("Backend working! Message from DB: " + result[0].message);
  });
});

app.listen(5000, () => console.log("Backend running on port 5000"));
