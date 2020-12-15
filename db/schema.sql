DROP DATABASE IF EXISTS sneakers;

CREATE DATABASE sneakers;

USE sneakers;

CREATE TABLE shoes (
	id INT AUTO_INCREMENT NOT NULL,
	PRIMARY KEY (id),
	name VARCHAR (200),
    brand VARCHAR (200),
    release_date VARCHAR (30),
    collaborators VARCHAR (200),
    color VARCHAR (100),
    sizing_type VARCHAR (5),
    sizing_gender VARCHAR (2),
    minimum_size INT (3),
    maximum_size INT (3),
    price_min INT (10),
    price_max INT (10),
    description VARCHAR (200),
    style VARCHAR (100),
    product_link VARCHAR (200)
    );