--1)
CREATE TABLE IF NOT EXISTS students (id INTEGER PRIMARY KEY, name TEXT NOT NULL, age INTEGER NOT NULL, city TEXT NOT NULL);
INSERT INTO students (name, age, city) VALUES
  ('Nika Beridze', 20, 'Tbilisi'),
  ('Ana Kapanadze', 22, 'Batumi'),
  ('Giorgi Maisuradze', 19, 'Kutaisi'),
  ('Mariam Gelashvili', 21, 'Tbilisi'),
  ('Luka Chikovani', 23, 'Rustavi'),
  ('Tamar Jincharadze', 20, 'Gori'),
  ('Davit Lomidze', 24, 'Zugdidi'),
  ('Nino Abashidze', 18, 'Telavi'),
  ('Saba Kvaratskhelia', 22, 'Tbilisi'),
  ('Elene Tsiklauri', 21, 'Poti');

SELECT city, COUNT(*) AS students_count FROM students GROUP BY city ORDER BY city;


--2)
CREATE TABLE IF NOT EXISTS products (id INTEGER PRIMARY KEY, name TEXT NOT NULL, category TEXT NOT NULL, price REAL NOT NULL);
INSERT INTO products (name, category, price) VALUES
    ('iPhone 15', 'Electronics', 2500),
    ('Samsung Galaxy S24', 'Electronics', 2200),
    ('MacBook Air', 'Computers', 3500),
    ('Lenovo ThinkPad', 'Computers', 2800),
    ('Nike Air Max', 'Shoes', 450),
    ('Adidas Superstar', 'Shoes', 300),
    ('IKEA Desk', 'Furniture', 600),
    ('Gaming Chair', 'Furniture', 850),
    ('Logitech Mouse', 'Accessories', 120),
    ('Sony Headphones', 'Accessories', 400);

SELECT category, COUNT(*) AS category_production FROM products GROUP BY category ORDER BY category;

--6)
SELECT category, AVG(price) AS category_avg_price FROM products GROUP BY category HAVING AVG(price) >= 100 ORDER BY category;


--3)
CREATE TABLE IF NOT EXISTS employees (id INTEGER PRIMARY KEY, name TEXT NOT NULL, department TEXT NOT NULL, salary REAL NOT NULL);
INSERT INTO employees (name, department, salary) VALUES
    ('Nika Beridze', 'IT', 5000),
    ('Ana Kapanadze', 'HR', 3500),
    ('Giorgi Maisuradze', 'Finance', 4200),
    ('Mariam Gelashvili', 'IT', 5500),
    ('Luka Chikovani', 'Marketing', 3800),
    ('Tamar Jincharadze', 'HR', 3600),
    ('Davit Lomidze', 'Finance', 4500),
    ('Nino Abashidze', 'IT', 6000),
    ('Saba Kvaratskhelia', 'Marketing', 4000),
    ('Elene Tsiklauri', 'Finance', 4800);

SELECT department, AVG(salary) AS average_department_salary FROM employees GROUP BY department ORDER BY department;



--4)
CREATE TABLE IF NOT EXISTS orders (id INTEGER PRIMARY KEY, customer_name TEXT NOT NULL, product_name TEXT NOT NULL, price REAL NOT NULL);
INSERT INTO orders (customer_name, product_name, price) VALUES
    ('Nika Beridze', 'iPhone 15', 2500),
    ('Ana Kapanadze', 'MacBook Air', 3500),
    ('Giorgi Maisuradze', 'Nike Air Max', 450),
    ('Mariam Gelashvili', 'Samsung Galaxy S24', 2200),
    ('Luka Chikovani', 'Gaming Chair', 850),
    ('Tamar Jincharadze', 'Sony Headphones', 400),
    ('Nika Beridze', 'Logitech Mouse', 120),
    ('Ana Kapanadze', 'Adidas Superstar', 300),
    ('Davit Lomidze', 'Lenovo ThinkPad', 2800),
    ('Nika Beridze', 'IKEA Desk', 600);

SELECT customer_name, SUM(price) AS customer_total_spent FROM orders GROUP BY customer_name ORDER BY customer_name;



--5)
CREATE TABLE IF NOT EXISTS students1 (id INTEGER PRIMARY KEY, name TEXT NOT NULL, class_name TEXT NOT NULL, grade INTEGER NOT NULL);

INSERT INTO students1 (name, class_name, grade) VALUES
    ('Nika Beridze', '10A', 85),
    ('Ana Kapanadze', '10A', 92),
    ('Giorgi Maisuradze', '10A', 78),
    ('Mariam Gelashvili', '10B', 95),
    ('Luka Chikovani', '10B', 88),
    ('Tamar Jincharadze', '10B', 76),
    ('Davit Lomidze', '11A', 90),
    ('Nino Abashidze', '11A', 83),
    ('Saba Kvaratskhelia', '11A', 97),
    ('Elene Tsiklauri', '11B', 89),
    ('Irakli Gogoladze', '11B', 72),
    ('Salome Chikhradze', '11B', 94);

SELECT class_name, COUNT(*) AS students_count FROM students1 GROUP BY class_name HAVING COUNT(*) > 2 ORDER BY class_name;