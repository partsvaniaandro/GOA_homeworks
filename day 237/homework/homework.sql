--1)
CREATE TABLE IF NOT EXISTS users (
    id INTEGER PRIMARY KEY,
    username TEXT NOT NULL,
    email TEXT NOT NULL UNIQUE
);
INSERT INTO users (username, email) VALUES
    ('alex_mercer', 'alex.mercer@example.com'),
    ('nina_k', 'nina.k@example.com'),
    ('giorgi_b', 'giorgi.b@example.com'),
    ('tamar_dev', 'tamar.dev@example.com'),
    ('sam_rivera', 'sam.rivera@example.com'),
    ('lika_m', 'lika.m@example.com'),
    ('dato_codes', 'dato.codes@example.com'),
    ('maya_chen', 'maya.chen@example.com'); 



--2)
CREATE TABLE IF NOT EXISTS products (
    id INTEGER PRIMARY KEY,
    name TEXT NOT NULL,
    price_cents INTEGER NOT NULL CHECK(price_cents > 0)
);
INSERT INTO products (name, price_cents) VALUES
    ('Wireless Mouse', 24.99),
    ('Mechanical Keyboard', 89.50),
    ('USB-C Cable', 9.99),
    ('27" Monitor', 219.00),
    ('Laptop Stand', 34.75),
    ('Webcam 1080p', 49.90),
    ('Desk Lamp', 19.99),
    ('Noise-Canceling Headphones', 149.00);



--3)
CREATE TABLE IF NOT EXISTS employees (
    id INTEGER PRIMARY KEY,
    name TEXT NOT NULL,
    email TEXT NOT NULL UNIQUE
);
INSERT INTO employees (name, email) VALUES 
    ('Alex Mercer', 'alex.mercer@example.com'),
    ('Nina Kowalski', 'nina.kowalski@example.com'),
    ('Giorgi Beridze', 'giorgi.beridze@example.com'),
    ('Tamar Gelashvili', 'tamar.gelashvili@example.com'),
    ('Sam Rivera', 'sam.rivera@example.com'),
    ('Lika Maisuradze', 'lika.maisuradze@example.com'),
    ('David Kapanadze', 'david.kapanadze@example.com'),
    ('Maya Chen', 'maya.chen@example.com');



--4)
CREATE TABLE IF NOT EXISTS orders(
    id INTEGER PRIMARY KEY,
    customer_name TEXT NOT NULL,
    status TEXT DEFAULT 'pending'
);
INSERT INTO orders(customer_name, status) VALUES
    ('Alex Mercer', 'pending'),
    ('Nina Kowalski', 'shipped'),
    ('Giorgi Beridze', 'delivered'),
    ('Tamar Gelashvili', 'cancelled'),
    ('Sam Rivera', 'shipped');
INSERT INTO orders (customer_name) VALUES
    ('Mike Hawkslong'),
    ('judy stroyer'),
    ('Ben Dover');

--5)
CREATE TABLE IF NOT EXISTS cars (
    id INTEGER PRIMARY KEY,
    brand TEXT NOT NULL,
    year INTEGER NOT NULL
);
INSERT INTO cars (brand, year) VALUES
    ('Toyota', 2018),
    ('BMW', 2021),
    ('Mercedes-Benz', 2015),
    ('Honda', 2019),
    ('Ford', 2012),
    ('Volkswagen', 2020),
    ('Hyundai', 2017),
    ('Tesla', 2023);



--6)
CREATE TABLE IF NOT EXISTS school_students (
    name TEXT NOT NULL
);
INSERT INTO school_students (name) VALUES
    ('Alex Mercer'),
    ('Nina Kowalski'),
    ('Giorgi Beridze'),
    ('Tamar Gelashvili'),
    ('Sam Rivera'),
    ('Lika Maisuradze'),
    ('David Kapanadze'),
    ('Maya Chen');



CREATE TABLE IF NOT EXISTS course_students (
    name TEXT NOT NULL
);
INSERT INTO course_students (name) VALUES
    ('Nina Kowalski'),
    ('Sam Rivera'),
    ('Maya Chen'),
    ('Giorgi Beridze'),
    ('Alex Mercer'),
    ('Ana Lomidze'),
    ('Nika Tsiklauri'),
    ('Elene Japaridze');

SELECT name FROM school_students
UNION
SELECT name FROM course_students



--7)
CREATE TABLE IF NOT EXISTS action_movies (
    name TEXT NOT NULL
);

CREATE TABLE IF NOT EXISTS comedy_movies (
    name TEXT NOT NULL
);

INSERT INTO action_movies (name) VALUES
    ('Die Hard'),
    ('Mad Max: Fury Road'),
    ('John Wick'),
    ('The Dark Knight'),
    ('Rush Hour'),
    ('Mission: Impossible'),
    ('Kung Fu Hustle'),
    ('Central Intelligence');

INSERT INTO comedy_movies (name) VALUES
    ('Superbad'),
    ('The Hangover'),
    ('Rush Hour'),
    ('Step Brothers'),
    ('Kung Fu Hustle'),
    ('Bridesmaids'),
    ('Central Intelligence'),
    ('Anchorman');

SELECT name FROM action_movies
UNION ALL
SELECT name FROM comedy_movies