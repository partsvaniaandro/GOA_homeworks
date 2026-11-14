-- *1)
CREATE TABLE IF NOT EXISTS students (id INTEGER PRIMARY KEY, name TEXT NOT NULL, age INTEGER NOT NULL, grade INTEGER NOT NULL);

INSERT INTO students (name, age, grade) VALUES
('Luka', 18, 96),
('Mariam', 17, 88),
('Nika', 16, 91),
('Saba', 19, 85),
('Giorgi', 18, 93),
('Ana', 17, 90);

SELECT COUNT(*) AS total_students FROM students;


-- *2)
CREATE TABLE IF NOT EXISTS products (id INTEGER PRIMARY KEY, name TEXT NOT NULL, price INTEGER NOT NULL);

INSERT INTO products (name, price) VALUES
('Laptop', 100000),
('Mouse', 2500),
('Keyboard', 7500),
('Monitor', 30000),
('Headphones', 15000),
('Webcam', 10000),
('Speaker', 20000);

SELECT AVG(price) AS average_price FROM products;
SELECT MIN(price) AS lowest_price FROM products;
SELECT MAX(price) AS highest_price FROM products;


-- *3)
CREATE TABLE IF NOT EXISTS employees (id INTEGER PRIMARY KEY, name TEXT NOT NULL, salary REAL NOT NULL, department TEXT NOT NULL);

INSERT INTO employees (name, salary, department) VALUES
('Luka Beridze', 4500.00, 'Engineering'),
('Mariam Kapanadze', 4200.00, 'Marketing'),
('Nika Gelashvili', 3900.00, 'Sales'),
('Ana Maisuradze', 4800.00, 'Finance'),
('Giorgi Chikovani', 5100.00, 'Engineering'),
('Saba Lomidze', 3600.00, 'Human Resources'),
('Tamar Japaridze', 4400.00, 'Design'),
('David Tsiklauri', 4000.00, 'Operations');

SELECT SUM(salary) AS total_salary FROM employees;



-- *4)
CREATE TABLE IF NOT EXISTS orders (id INTEGER PRIMARY KEY, customer_name TEXT NOT NULL, payment REAL NOT NULL);

INSERT INTO orders (customer_name, payment) VALUES
('Luka Beridze', 125.50),
('Mariam Kapanadze', 89.99),
('Nika Gelashvili', 240.00),
('Ana Maisuradze', 64.75),
('Giorgi Chikovani', 310.20),
('Saba Lomidze', 45.00),
('Tamar Japaridze', 178.40),
('David Tsiklauri', 96.30),
('Elene Abashidze', 520.00),
('Dato Kvaratskhelia', 135.80);

SELECT 
    COUNT(*) AS total_orders, 
    SUM(payment) AS total_revenue,
    AVG(payment) AS average_payment,
    MAX(payment) AS most_expensive_order,
    MIN(payment) AS cheapest_order
FROM products;