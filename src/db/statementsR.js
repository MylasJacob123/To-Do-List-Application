const db = require("better-sqlite3")("database.db");

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

const insertTable = (userName, email, hashed_password) => {
    const sql = `
        INSERT INTO users (userName, email, hashed_password)
        VALUES (?, ?, ?)
    `;
    db.prepare(sql).run(userName, email, hashed_password);
};

createTable();

insertTable();
