import fs from "fs";
import dotenv from "dotenv";
import { format } from "date-fns";
import express from "express";
import formidable from "formidable";
import { client } from "./db";
import path from "path";
import expressSession from "express-session";
dotenv.config();

const uploadDir = "public/uploads";
fs.mkdirSync(uploadDir, { recursive: true });
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(
  expressSession({
    secret: "Tecky Academy teaches typescript",
    resave: true,
    saveUninitialized: true,
  })
);

declare module "express-session" {
  interface SessionData {
    user?: { id: number };
  }
}

app.post("/login-dev", async (req, res) => {
  req.session.user = { id: 1 };
  res.json({});
});

app.get("/uerInfo", async (req, res) => {
  try {
    const userEmail = req.session.email;
    const userName = await client.query(`SELECT name,profile_image FROM USERS WHERE EMAIL = $1`, [userEmail]);
    //const userProIcon = await client.query(`SELECT  FROM USERS WHERE EMAIL = $1`, [userEmail]);
    res.json(userName.rows[0]);
  } catch (err) {
    res.json({ success: "false", error: err + "" });
  }
});

//submit review - Hello Ben!!!!!! Nice website!!!!!! Eat banana la!
app.post("/reviewSubmit", async (req, res) => {
  
  try {
    // "dial-in" to the postgres server
    let counter = 0;
    const userName = "ben@g.com"//req.session.user;
    const restaurantName = req.query.rest;
    const form = formidable({
      uploadDir,
      keepExtensions: true,
      maxFiles: 20,
      maxFileSize: 200 * 1024 ** 3,
      filename: (_originalName, _originalExt, part, _form) => {
        let fieldName = part.name;
        let timestamp = Date.now();
        let ext = part.mimetype?.split("/").pop();
        counter++;
        return `${fieldName}-${timestamp}-${counter}.${ext}`;
      },

      filter: (part) => part.mimetype?.startsWith("image/") || false,
    });

    form.parse(req, async (err, fields, files) => {
      const restaurantIdJson = await client.query(`SELECT id FROM RESTAURANTS WHERE NAME = $1`, [
        restaurantName,
      ]);
      const userIDJson = await client.query(`SELECT id FROM USERS WHERE EMAIL = $1`, [userName]);
      const userIDValue = userIDJson.rows[0].id;
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
        fields.totalR,
      ];

      await client.query(
        "INSERT INTO reviews (review_content,date_of_review,time_of_review,user_id,restaurant_id,image_upload,title,clean_rank,taste_rank,service_rank,environment_rank,cp_rank,total_rank) VALUES ($1,$2,$3,$4,$5,$6,$7,$8,$9,$10,$11,$12,$13)",
        rest
      );
    });

    res.json({ success: "true" });
  } catch (err) {
    res.json({ success: "false", error: err + "" });
  }
});
//show all review

// app.post("/reviewDisplay", async (req, res) => {
//   try {
//     // const page =+(req.query.page as string)
//     // if (page){
//     const {page} = req.body;
//     const reqData = { page };
//     console.log(reqData);
//     const rowsData = await client.query(`SELECT count(*) FROM reviews;`);
//     const rowsDataValue = rowsData.rows[0].count as string;
//     res.json({ reviewNumbers: rowsDataValue });
//   } catch (err) {
//     // }

//     res.json({ success: "false", error: err + "" });
//   }
// });
app.get("/reviewTotal/q/:quantity/p/:page", async (req, res) => {
  const quantity = +(req.params.quantity as string);
  const page = +(req.params.page as string);
  const rowsData = await client.query(`SELECT count(*) FROM reviews;`);
  const rowsDataValue = Math.ceil(+rowsData.rows[0].count / quantity);
  res.json({ reviewNumbers: rowsDataValue });
});
app.get("/reviewDisplay/q/:quantity/p/:page", async (req, res) => {
  try {
    const page = +(req.params.page as string);
    const quantity = +(req.params.quantity as string);
    const pageShow = (page - 1) * quantity;
    let nowPageOffset = 0;
    if (pageShow < 0) {
      nowPageOffset = 0;
    } else {
      nowPageOffset = pageShow;
    }

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
    inner join restaurants on restaurants.id = reviews.restaurant_id LIMIT ${quantity} OFFSET ${nowPageOffset}`);

    res.json({ reviewData: data.rows }); //
  } catch (err) {
    // }

    res.json({ success: "false", error: err + "" });
  }
});
app.get("/restPic", async (req, res) => {
  try {
    const reqData = req.query.rest;
    const data = await client.query("SELECT Restaurant_image FROM RESTAURANTS WHERE NAME = $1", [
      reqData,
    ]);
    res.json(data.rows[0]);
  } catch (err) {
    res.json({ success: "false", error: err + "" });
  }
});
app.use(express.static(path.join(__dirname, "public")));

// Start the server
const PORT = 8080;
app.listen(PORT, () => {
  console.log(`listening at http://localhost:${PORT}`);
});


