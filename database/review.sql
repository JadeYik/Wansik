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


select * from reviews;
SELECT * FROM reviews join users on users.id = reviews.user_id;
TRUNCATE TABLE reviews;




SELECT 
    reviews.image_upload, 
    reviews.date_of_review, 
    reviews.time_of_review, 
    reviews.review_content, 
    reviews.title,
    restaurants.name as restaurants_name,
    users.name as user_name,
    users.profile_image 
    FROM reviews
    inner join users on users.id = reviews.user_id
    inner join restaurants on restaurants.id = reviews.restaurant_id;

update restaurants set  restaurant_image = 'Restaurant_1.jpg' where name = 'MM';
TRUNCATE TABLE reviews;
select * from restaurants;
select profile_image from users;
select * from reviews;
ALTER TABLE restaurants ADD COLUMN restaurant_image varchar;