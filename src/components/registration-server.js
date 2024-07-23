const express = require("express");
const bodyParser = require("body-parser");
const bcrypt = require("bcrypt");
const db = require("better-sqlite3")("database.db");
const cors = require("cors");

const app = express();
const PORT = 5000;

app.use(cors());
app.use(bodyParser.json());

const createTable = () => {
  const sql = `
    CREATE TABLE IF NOT EXISTS users (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      userName TEXT NOT NULL,
      email TEXT NOT NULL,
      hashed_password TEXT NOT NULL
    )
  `;
  db.prepare(sql).run();
};

createTable();

app.post("/register", async (req, res) => {
  const { username, email, password } = req.body;

  try {
    const hashedPassword = await bcrypt.hash(password, 10);
    const sql = `
      INSERT INTO users (userName, email, hashed_password)
      VALUES (?, ?, ?)
    `;
    db.prepare(sql).run(username, email, hashedPassword);
    res.status(200).send("User registered successfully!");
  } catch (error) {
    res.status(500).send("Error registering user");
  }
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
