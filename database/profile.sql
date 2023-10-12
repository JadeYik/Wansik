/* Create database name wansik */
CREATE DATABASE wansik;

/* Create table name users */
CREATE TABLE users (
  id SERIAL PRIMARY KEY,
  name VARCHAR,
  email VARCHAR,
  password VARCHAR,
  phone VARCHAR,
  profile_image VARCHAR,
  created_at TIMESTAMP,
  updated_at TIMESTAMP
);

