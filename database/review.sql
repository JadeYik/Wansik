/* Create database name wansik */
CREATE DATABASE wansik;

/* Create table name users */
CREATE TABLE reviews (
  id SERIAL PRIMARY KEY,
  review_content TEXT,
  image_upload VARCHAR,
  date_of_review DATE,
  time_of_review TIME,
  user_id int,
  restaurant_id int,
  FOREIGN KEY (user_id) REFERENCES users(id),
  FOREIGN KEY (restaurant_id) REFERENCES restaur ants(id),
  title VARCHAR(255),
  clean_rank int,
  taste_rank int,
  service_rank int,
  environment_rank int,
  cp_rank int,
  total_rank int
); 