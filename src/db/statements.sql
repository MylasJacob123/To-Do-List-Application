CREATE TABLE users (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT NOT NULL,
    age INTEGER
)

INSERT INTO users (name, age)
VALUES
     ("Jimmy", 22),
     ("Amy", 21)
     
UPDATE users     
SET name = "James"
WHERE name = "Jimmy"

DELETE FROM users 
WHERE name = "John"

SELECT name FROM users 
WHERE id = 2

DROP TABLE users