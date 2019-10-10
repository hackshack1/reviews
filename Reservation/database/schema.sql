DROP DATABASE IF EXISTS air6n6; 
CREATE DATABASE air6n6;
-- USE Air6n6;

-- CREATE TABLE Listings (
--   listingId INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
--   name VARCHAR(100) NOT NULL,
--   basePrice INT NOT NULL, 
--   cleaningFee INT NOT NULL,
--   serviceFee INT NOT NULL,
--   minStay,
--   maxStay,
--   instantBooked,
--   maxGuest
-- ); 

-- CREATE TABLE Reservations (
--   id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
--   user VARCHAR(100) NOT NULL,
--   month INT,
--   date INT,
--   checkin DATE NOT NULL,
--   total nights,
--   listingId INT NOT NULL,
--   children
--   adults
--   infants
--   FOREIGN KEY (listingId) REFERENCES Listings(listingId)
-- );