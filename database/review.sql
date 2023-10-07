/* Create database name wansik */
CREATE DATABASE wansik;

/* Create table name users */
CREATE TABLE reviews (
  id SERIAL PRIMARY KEY,
  review_content VARCHAR,
  image_upload VARCHAR,
  date_of_review DATE,
  time_of_review TIME,
  user_id int,
  restaurant_id int,
  FOREIGN KEY (user_id) REFERENCES users(id),
  FOREIGN KEY (restaurant_id) REFERENCES restaurants(id)
);