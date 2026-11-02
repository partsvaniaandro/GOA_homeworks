--1)
CREATE TABLE IF NOT EXISTS students (
  id INTEGER PRIMARY KEY,
  name TEXT,
  age INTEGER,
  grade INTEGER);
INSERT INTO students (id, name, age, grade) VALUES
(1, 'Giorgi Beridze', 17, 100),
(2, 'Nino Kapanadze', 16, 90),
(3, 'Luka Meladze', 18, 40),
(4, 'Mariam Gelashvili', 17, 60),
(5, 'Dato Lomidze', 16, 80),
(6, 'Ana Chikovani', 18, 70);

SELECT * FROM students ORDER BY age ASC

--2)
SELECT * FROM students ORDER BY age DESC

--3)
SELECT * FROM students ORDER BY grade ASC

--4)
SELECT * FROM students ORDER BY grade DESC

--5)
CREATE TABLE IF NOT EXISTS products (
  id INTEGER PRIMARY KEY AUTOINCREMENT, 
  name TEXT, price DECIMAL,
  quantity INTEGER);
INSERT INTO products (name, price, quantity) VALUES
('Laptop', 1299.99, 5),
('Wireless Mouse', 24.50, 6),
('Mechanical Keyboard', 89.00, 2),
('USB-C Cable', 9.99, 3),
('Monitor 27"', 349.00, 7),
('Headphones', 59.90, 10),
('Webcam', 45.00, 3);

SELECT * FROM products ORDER BY price ASC

--6)
SELECT * FROM products ORDER BY price DESC

--7)
SELECT * FROM products ORDER BY quantity DESC

--8)    
CREATE TABLE IF NOT EXISTS employees (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  name TEXT NOT NULL,
  salary INTEGER NOT NULL,
  department TEXT NOT NULL
);

INSERT INTO employees (name, salary, department) VALUES
('Giorgi Beridze', 3500.00, 'IT'),
('Nino Kapanadze', 2800.00, 'HR'),
('Luka Meladze', 4200.00, 'IT'),
('Mariam Gelashvili', 3100.00, 'Finance'),
('Dato Lomidze', 2600.00, 'Marketing'),
('Ana Chikovani', 3900.00, 'Finance'),
('Tornike Abashidze', 3300.00, 'Marketing');

SELECT * FROM employees ORDER BY salary DESC;

--9)
SELECT * FROM employees ORDER BY name ASC;

--10)
SELECT * FROM employees ORDER BY name DESC;

--11)
SELECT * FROM students ORDER BY age ASC, grade DESC;

--12)
SELECT * FROM students ORDER BY price ASC, quantity DESC;

--13)
SELECT * FROM employees ORDER BY department ASC, salary DESC;

--14)
SELECT * FROM students WHERE grade >= 80 ORDER BY grade DESC;

--15)
SELECT * FROM products WHERE price <= 100 ORDER BY price ASC;