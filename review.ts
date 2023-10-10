import fs from "fs";
import dotenv from "dotenv";
import { format } from "date-fns";
import express from "express";
import formidable from "formidable";
import { client } from "./db";
import path from "path"
dotenv.config();

const uploadDir = "public/uploads";
fs.mkdirSync(uploadDir, { recursive: true });
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//submit review
app.post("/html/review_submit.html/submit/rest/:rName/user/:Name", async (req, res) => {
  try {
    // "dial-in" to the postgres server
    let counter =0
    const userName = req.params.Name//req.params.name
    const restaurantName = req.params.rName
    const form = formidable({
      uploadDir,
      keepExtensions: true,
      maxFiles: 20,
      maxFileSize: 200 * 1024 ** 3,
      filename: (_originalName, _originalExt, part, _form) => {
        let fieldName = part.name
        let timestamp = Date.now()
        let ext = part.mimetype?.split('/').pop()
        counter++
        return `${fieldName}-${timestamp}-${counter}.${ext}`
      },
      
      filter: (part) => part.mimetype?.startsWith("image/") || false,
    });

    form.parse(req, async (err, fields, files) => {
      const userIDJson = await client.query(`SELECT id FROM USERS WHERE NAME = $1`, [userName]);
      const userIDValue = userIDJson.rows[0].id;
      const restaurantIdJson = await client.query(`SELECT id FROM RESTAURANTS WHERE NAME = $1`, [restaurantName]);
      const restaurantIdValue = restaurantIdJson.rows[0].id;
      const rest = [
        fields.content,
        format(new Date(), "MM/dd/yyyy"),
        format(new Date(), "HH:mm"),
        userIDValue,
        restaurantIdValue,
        (files.image as formidable.File)?.newFilename,
        fields.title,
        fields.cleanR,
        fields.tasteR,
        fields.serR,
        fields.envR,
        fields.cpR,
        fields.totalR
      ];

      await client.query(
        "INSERT INTO reviews (review_content,date_of_review,time_of_review,user_id,restaurant_id,image_upload,title,clean_rank,taste_rank,service_rank,environment_rank,cp_rank,total_rank) VALUES ($1,$2,$3,$4,$5,$6,$7,$8,$9,$10,$11,$12,$13)",rest 
      );
  
    });

  
    res.redirect("/html/review_submit.html");
  } catch (err) {
    res.json({ success: "false", error: err + "" });
  }
});
//show all review

app.get("/reviewDisplay", async (req, res)  => {
  try {
  // const page =+(req.query.page as string) 
  // if (page){
  const rowsData = await client.query(`SELECT count(*) FROM reviews;`);   
  const rowsDataValue = ((rowsData.rows[0].count)as string)
    const data = await client.query(`SELECT 
    reviews.image_upload, 
    reviews.date_of_review, 
    reviews.time_of_review, 
    reviews.review_content, 
    reviews.title,
    restaurants.name as restaurants_name,
    users.name as user_name,
    users.profile_image  as user_profile_image
    FROM reviews
    inner join users on users.id = reviews.user_id
    inner join restaurants on restaurants.id = reviews.restaurant_id;`);

    res.json({reviewNumbers:rowsDataValue,reviewData:data.rows}) 
  }
// } 
  
  catch (err) {
    res.json({ success: "false", error: err + "" });
  }
});

app.use(express.static(path.join(__dirname,"public")))

// Start the server
const PORT = 8080;
app.listen(PORT, () => {
  console.log(`listening at http://localhost:${PORT}`);
});
