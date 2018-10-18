DROP DATABASE IF EXISTS checkout;

CREATE DATABASE checkout;

USE checkout;

CREATE table form1 (
  id INT AUTO_INCREMENT PRIMARY KEY,
  name TEXT,
  email TEXT,
  password TEXT
);

CREATE table form2 (
  id INT AUTO_INCREMENT PRIMARY KEY,
  address VARCHAR(50),
  city VARCHAR(20),
  phone BIGINT
);

CREATE table form3 (
  id INT AUTO_INCREMENT PRIMARY KEY,
  cc INT,
  expiry VARCHAR(20),
  CVV INT,
  billingZipCode INT
);

INSERT INTO form1 (name, email, password) VALUES ('Meech', 'meech@me.com', 'ilovehotcheetos');
INSERT INTO form2 (address, city, phone) VALUES ('944 Market St', 'SF', 8888888888);
