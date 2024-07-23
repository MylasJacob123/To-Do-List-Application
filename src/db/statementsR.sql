DROP TABLE IF EXISTS users;

CREATE TABLE users (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    userName TEXT NOT NULL,
    email TEXT NOT NULL,
    hashed_password TEXT NOT NULL
);

INSERT INTO users (userName, email, hashed_password)
VALUES 
    ("Nano$$1", "nano@gmail.com", "<hashed_password>"),
    ("Takin$$2", "take@gmail.com", "<hashed_password>")

