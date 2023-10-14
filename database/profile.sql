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

CREATE TABLE appointment (
  id SERIAL PRIMARY KEY,
  user_id int,
  restaurant_id int,
  FOREIGN KEY (user_id) REFERENCES users(id),
  FOREIGN KEY (restaurant_id) REFERENCES restaurants(id),
  guest_name VARCHAR(100),
  appointment_date date,
  appointment_time time,
  restaurant_name  VARCHAR,
  accept boolean,
  cancel boolean,
  created_at TIMESTAMP,
  updated_at TIMESTAMP
);

CREATE TABLE restaurants (
  id SERIAL PRIMARY KEY,
  restaurant_name VARCHAR,
  restaurant_address VARCHAR(200),
  district VARCHAR(50),
  restaurant_phone VARCHAR(100),
  latitude decimal,
  longitude decimal,
  restaurant_image VARCHAR,
  created_at TIMESTAMP,
  updated_at TIMESTAMP
);
