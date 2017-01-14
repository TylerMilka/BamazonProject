CREATE database Bamazondb;

USE Bamazondb;

CREATE TABLE products (
item_id INTEGER(20) AUTO_INCREMENT NOT NULL, 
product_name VARCHAR (30),
department_name VARCHAR (30), 
cost INTEGER (8), 
stock_quantity INTEGER (8),
PRIMARY KEY (item_id)
);	

INSERT INTO products(item_id, product_name, department_name, cost, stock_quantity)
VALUES (1, "Ancient Tooth Brush", "artifacts", 1500, 1);

INSERT INTO products(item_id, product_name, department_name, cost, stock_quantity)
VALUES (2222, "Roman Shoe Horn", "artifacts", 1200, 4);

INSERT INTO products(item_id, product_name, department_name, cost, stock_quantity)
VALUES (443, "Organic Seanut Butter", "Food", 100, 30);

INSERT INTO products(item_id, product_name, department_name, cost, stock_quantity)
VALUES (523, "Granular Sugar Cubes", "Food", 4, 45);

INSERT INTO products(item_id, product_name, department_name, cost, stock_quantity)
VALUES (215, "Lebron's Ego", "Collectors Item", 1000, 100);

INSERT INTO products(item_id, product_name, department_name, cost, stock_quantity)
VALUES (675, "Allen Iverson Rookie Card", "Collectors Item", 2000, 4);

INSERT INTO products(item_id, product_name, department_name, cost, stock_quantity)
VALUES (73, "Jimi Hendrix's Headband", "Collectors Item", 5055, 1);

INSERT INTO products(item_id, product_name, department_name, cost, stock_quantity)
VALUES (821, "Alaskin Sea Bass", "Food", 30, 40);

INSERT INTO products(item_id, product_name, department_name, cost, stock_quantity)
VALUES (912, "Giant Panda", "Collectors Item", 3000, 1);

INSERT INTO products(item_id, product_name, department_name, cost, stock_quantity)
VALUES (103, "Authentic Tortilla Chips", "Food", 15, 500);