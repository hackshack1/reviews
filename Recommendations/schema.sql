DROP DATABASE IF EXISTS recommendations;
CREATE DATABASE recommendations;

USE recommendations;

CREATE TABLE pictures (id int NOT NULL auto_increment,
  url varchar(500),
  primary key (id));

-- CREATE TABLE cities (
--   id int NOT NULL auto_increment, 
--   cityName varchar(100), 
--   stateName varchar(50), 
--   country varchar(100),
--   primary key (id)
-- );


-- CREATE TABLE pictures_homes


-- CREATE TABLE users (
--   id int NOT NULL auto_increment, 
--   userName varchar(100),
--     primary key (id));

CREATE TABLE listings (
  id int NOT NULL auto_increment,
  homeType varchar(100), 
  title varchar(100),
  price decimal(5,2),
  reviewCount varchar(20),
  rating decimal(3,2),
  cityName varchar(100), 
  stateName varchar(50), 
  country varchar(100),
  picture varchar(300),
  primary key (id));


