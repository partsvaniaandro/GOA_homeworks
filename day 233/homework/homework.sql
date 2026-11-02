CREATE TABLE IF NOT EXISTS products (id INTEGER PRIMARY KEY, title TEXT, price INTEGER);
INSERT INTO products (id, title, price) VALUES 
(1, 'Keyboard', 4999),
(2, 'Mouse', 1999), 
(3, 'Monitor', 15999), 
(4, 'Headphones', 7999), 
(5, 'Webcam', 5999), 
(6, 'USB Cable', 799), 
(7, 'Laptop Stand', 3499), 
(8, 'Microphone', 8999);
SELECT * FROM products WHERE title LIKE 'M%'
SELECT * FROM products WHERE title LIKE '%R'
SELECT * FROM products WHERE title LIKE '%phone%'



CREATE TABLE IF NOT EXISTS users (id INTEGER PRIMARY KEY, name TEXT, email TEXT);
INSERT INTO users (id, name, email) VALUES 
(1, 'Giorgi', 'giorgi@gmail.com'), 
(2, 'Nika', 'nika@gmail.com'), 
(3, 'Mariam', 'mariam@gmail.com'), 
(4, 'Ana', 'ana@example.com'), 
(5, 'Levan', 'levan@example.com'), 
(6, 'Tamar', 'tamar@example.com'), 
(7, 'Davit', 'davit@gmail.com'), 
(8, 'Nino', 'nino@example.com');
SELECT * FROM users WHERE name LIKE 'G%';
SELECT * FROM users where email LIKE '%@gmail.com';


CREATE TABLE IF NOT EXISTS movies (id INTEGER PRIMARY KEY, title TEXT, genre TEXT);
INSERT INTO movies (id, title, genre) VALUES
(1, 'The Shawshank Redemption', 'Drama'),
(2, 'The Dark Knight', 'Action'),
(3, 'Inception', 'Sci-Fi'),
(4, 'Pulp Fiction', 'Crime'),
(5, 'The Godfather', 'Crime'),
(6, 'Interstellar', 'Sci-Fi'),
(7, 'Spirited Away', 'Animation'),
(8, 'The Conjuring', 'Horror'),
(9, 'Parasite', 'Thriller'),
(10, 'Superbad', 'Comedy');
SELECT * FROM movies WHERE title LIKE '%the%'
SELECT * FROM movies WHERE genre LIKE 'Action%'

CREATE TABLE IF NOT EXISTS employees (id INTEGER PRIMARY KEY, name TEXT, position TEXT);
INSERT INTO amployees (id, name, position) VALUES 
(1, 'Giorgi Beridze', 'Manager'),
(2, 'Nika Kapanadze', 'Developer'),
(3, 'Mariam Gelashvili', 'Designer'),
(4, 'Ana Lomidze', 'Accountant'),
(5, 'Levan Chkheidze', 'Developer'),
(6, 'Tamar Abashidze', 'HR Specialist'),
(7, 'Davit Maisuradze', 'Sales Representative'),
(8, 'Nino Tsiklauri', 'Support Agent');
SELECT * FROM employees WHERE position LIKE '%manager%'