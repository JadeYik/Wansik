import fs from "fs";
import dotenv from "dotenv";
import { format } from "date-fns";
import express from "express";
import formidable from "formidable";
import { client } from "./db";
dotenv.config();

const uploadDir = "uploads";
fs.mkdirSync(uploadDir, { recursive: true });
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


app.post("/review/submit", async (req, res) => {
  try {
    // "dial-in" to the postgres server

    const form = formidable({
      uploadDir,
      keepExtensions: true,
      maxFiles: 20,
      maxFileSize: 200 * 1024 ** 3, // the default limit is 200KB
      filter: (part) => part.mimetype?.startsWith("image/") || false,
    });

    form.parse(req, async (err, fields, files) => {
      console.log({ err, fields, files });
      const userName = fields.userName;
      const restaurantIdValue = fields.restaurantIdValue;
   
      const imageName = (files.image as formidable.File)?.newFilename;
      const reviewContentValue = fields.content;
      const reviewTitleValue = fields.title;
      const reviewCleanRtValue = fields.cleanR;
      const reviewTasteRtValue = fields.tasteR;
      const reviewSerRtValue = fields.serR;
      const reviewEnvRtValue = fields.envR;
      const reviewCPRValue = fields.cpR;
      const reviewTotalRtValue = fields.totalR;

      

      console.log(userName);
      const userIDJson = await client.query(`SELECT id FROM USERS WHERE NAME = $1`, [userName]);
    
      const userIDValue = userIDJson.rows[0].id;
      const rest = {
        userId: userIDValue,
        restaurantId: restaurantIdValue,
        dateOfReview: format(new Date(), "MM/dd/yyyy"),
        timeOfReview: format(new Date(), "HH:mm"),
        reviewContent: reviewContentValue,
        imgName: imageName,
      };

      await client.query(
        "INSERT INTO reviews (review_content,date_of_review,time_of_review,user_id,restaurant_id,image_upload) VALUES ($1,$2,$3,$4,$5,$6)",
        [
          rest.reviewContent,
          rest.dateOfReview,
          rest.timeOfReview,
          rest.userId,
          rest.restaurantId,
          rest.imgName,
        ]
      );
      
    });

    res.json({ success: "true" });
  } catch (err) {
    res.json({ success: "false", error: err + "" });
  }
});

app.get("/review/page/:page", async (req, res) => {
  try {
  const page = +(req.params.page as String)*10
  const rowsData = await client.query(`SELECT count(*) FROM reviews;`);   
  const rowsDataValue = rowsData.rows[0].count
  if(rowsDataValue > 10){
    const data = await client.query("SELECT * FROM reviews LIMIT 10 OFFSET $1",[page]);
    res.json({data})

  } else {
    const data = await client.query("SELECT * FROM reviews");
    res.json({data})
  }

  } catch (err) {
    res.json({ success: "false", error: err + "" });
  }
});

// Start the server
const PORT = 8080;
app.listen(PORT, () => {
  console.log(`listening at http://localhost:${PORT}`);
});
