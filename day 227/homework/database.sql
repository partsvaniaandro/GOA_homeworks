CREATE TABLE users(
    id INTEGER,
    name TEXT,
    age INTEGER
);
INSERT INTO users (id, name, age) VALUES (1, 'გიორგი', 22);
INSERT INTO users (id, name, age) VALUES (2, 'ნინო', 17);
INSERT INTO users (id, name, age) VALUES (3, 'დავითი', 30);

SELECT * FROM users;
SELECT name FROM users;
SELECT * FROM users WHERE age > 18;

UPDATE users SET name = 'ლევანი', age = 25 WHERE id = 2;

DELETE FROM users WHERE id = 3;

SELECT * FROM users;