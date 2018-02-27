DROP DATABASE IF EXISTS damazon_db;

CREATE DATABASE damazon_db;

USE damazon_db;

CREATE TABLE products(
  item_id INT AUTO_INCREMENT NOT NULL,
  product_name VARCHAR(45) NOT NULL,
  product_sales DECIMAL(10,2) NOT NULL,
  department_name VARCHAR(45) NOT NULL,
  price DECIMAL(10,2) NOT NULL,
  stock_quantity INT(10) NOT NULL,
  primary key(item_id)
);

select * from products;

INSERT INTO Products(product_name,department_name,Price,stock_quantity)
VALUES ("Dam tour","ENTERTAINMENT",49.95,150),
    ("Dam Hoodies","CLOTHING",59.99,200),
    ("Dam movie tour","ENTERTAINMENT",24.50,50),
    ("Dam Raincoats","CLOTHING",75.00,5),
    ("Dam group tour","ENTERTAINMENT",54.25,35),
    ("Dam Unbrella","CLOTHING",42.42,42),
    ("Dam keychain","ACCESSORIES",15.00,25),
    ("Dam Sunglasses","ACCESSORIES",25.50,57),
    ("Dam puzzle","ENTERTAINMENT",30.50,35),
    ("Dam postcards(20)","ACCESSORIES",19.95,23);