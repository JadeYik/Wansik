/* Create database name wansik */
CREATE DATABASE wansik;

/* Create table name users */
CREATE TABLE reviews (
  id SERIAL PRIMARY KEY,
  review_content VARCHAR,
  image_upload VARCHAR,
  date_of_review DATE,
  time_of_review TIME
);