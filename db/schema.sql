DROP DATABASE IF blinkdb EXISTS;
CREATE DATABASE blinkdb;

DROP TABLE IF EXISTS users CASCADE;

CREATE TABLE users (
  email_id VARCHAR(50) PRIMARY KEY,
  token_id TEXT ,
-- date of birth in format dd-month-yyyy
  bday INT(2) NOT NULL,
);
