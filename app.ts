// This file contains the main application logic, including routing and middleware configuration.
import express, { Request, Response, NextFunction } from "express";
import path from 'path';
import formidable from 'formidable'
import fs from 'fs'
import { client } from "./db";
import expressSession from "express-session";
import { User } from "./models";

//////by Review
import { format } from "date-fns";

const app = express();


const usericonDir = path.join(__dirname, 'public', 'usericon')
fs.mkdirSync(usericonDir, { recursive: true })

// Third party middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(
  expressSession({
    secret: "Tecky Academy teaches typescript",
    resave: true,
    saveUninitialized: true,
  })
);
// tell typescript what type of info you should input
declare module "express-session" {
  interface SessionData {
    user?: { id: number, email: string,username:string }

  }
}

app.use((req, _res, next) => {
  console.log(`Request Path: ${req.path}  Method: ${req.method}`)
  next();
});


const isLoggedIn = (req: Request, res: Response, next: NextFunction) => {
  if (req.session.user) {
      next();
      return //after next() function should return value, or put else
  }
  // res.redirect("/");
  res.status(401).json({ success: false, message: "Login false" })
  console.log(isLoggedIn)
  return
}
// authRoutes.use(app)
//fake login
// app.post("/login-dev", async (req, res) => {
//   req.session.user = { id: 1 }
//   // const { rows } = await client.query('SELECT email, password FROM users WHERE email = $1;', ['example@example.com']);
//   // console.log(rows)
//   res.json({})
// })

//////////////////////////////////////////////////////////////////////////////////////////////////////////Login system//////////////////////////////////////////////////

app.get("/userInfo", async (req, res) => {
  if (!req.session.user ) {
    res.status(401).json({ success: false });
    return
  }
  res.json({ success: true, username: req.session.user?.username});
});

app.post("/login", async (req, res) => {
  const { email, password } = req.body  ;

  if (!email|| !password) {
  
    res.status(400).json({ success: false, message: "missing email or password" });
    return;
  }

  const result = await client.query("Select * from users where email = $1 and password = $2", [email, password])
  if (result.rowCount == 0) {
    res.status(400).json({ success: false, message: "invalid email or password" });
    return
  }
  
  req.session.user = { id: result.rows[0].id, email: result.rows[0].email,username:result.rows[0].email };

  res.json({ success: true, message: "success"});
});



//////////////////////////////////////////////////////////////////////////////////////////////////////////Login system//////////////////////////////////////////////////
app.post("/profile", async (req, res) => {

  const form = formidable({
    uploadDir: usericonDir,
    maxFiles: 1,
    maxFileSize: 200 * 1024 * 1024,
    filter: part => part.mimetype?.startsWith('image/') || false,
    // filename
    filename: (_originalName, _originalExt, part) => {
      const fieldName = part.name;
      const timestamp = Date.now();
      const ext = part.mimetype?.split("/").pop();
      return `${fieldName}-${timestamp}.${ext}`;
    }
  })
  form.parse(req, async (err, fields, file) => {
    try {
      // Insert the JSON data into the database
      const query =
        'INSERT INTO users (name, email, phone, profile_image, created_at , updated_at) VALUES ($1, $2, $3, $4, $5, $5)';
      const values = [
        fields.name,
        fields.email,
        fields.phone,
        (file.profile_image as formidable.File)?.newFilename,
        new Date(Date.now())
      ];
      await client.query(query, values);
      console.log('Profile data inserted successfully into PostgreSQL');
      res.json({ success: true, message: "success" })
    } catch (error) {
      console.log('Error inserting profile data into PostgreSQL');
      res.json({ success: false, message: "Error inserting profile data into PostgreSQL" })
    }
  })
})

app.get("/profile", isLoggedIn, async (req, res) => {

  console.log(req.session.user?.id)
  try {
    const profileReqData = await client.query(`SELECT * FROM users where id = $1;`, [req.session.user?.id])
    const historyReqData = await client.query(`SELECT * FROM appointment where user_id = $1;`, [req.session.user?.id])
    console.log(req.session.user?.id)
    console.log(profileReqData.rows[0])
  
    console.log(historyReqData.rows)
    res.json({ success: true, message: "success2",profileReq: profileReqData.rows[0], historyReq: historyReqData.rows })
  } catch (err) {
    console.log("Connot get the profile data")
    res.status(401).json({ success: false, message: "Connot get the profile data" })
  }

  // try {
  //   const historyReqData = await client.query(`SELECT * FROM appointment where id = $1;`, [req.session.user?.id])
  //   console.log(historyReqData.rows[0])
  //   res.json({ success: true, message: "success2", historyReq: historyReqData.rows[0] })
  // } catch (err) {
  //   console.log("Connot get the profile data")
  //   res.json({ success: false, message: "Connot get the profile data" })
  // }

})

app.put("/profile/:id", async (req, res) => {
  const id = 1
  // const id = req.params.id;

  const form = formidable({
    multiples: true,
    uploadDir: usericonDir,
    maxFiles: 1,
    maxFileSize: 200 * 1024 * 1024,
    filter: part => part.mimetype?.startsWith('image/') || false,
    // filename
    filename: (_originalName, _originalExt, part) => {
      const fieldName = part.name;
      const timestamp = Date.now();
      const ext = part.mimetype?.split("/").pop();
      return `${fieldName}-${timestamp}.${ext}`;
    }
  });

  form.parse(req, async (err, fields, files) => {
    if (err) {
      console.error("Error parsing form data:", err);
      res.json({ success: false, message: "Error parsing form data" });
      return;
    }

    const { name, email, phone }: { name?: string, email?: string, phone?: string } = fields;
    console.log((files.profile_image as formidable.File)?.newFilename)
    console.log(name, email, phone)

    try {
      const selectQuery = 'SELECT * FROM users WHERE id = $1';
      const { rows } = await client.query(selectQuery, [id]);

      if (rows.length === 0) {
        res.json({ success: false, message: "User not found" });
        return;
      }

      const user: any = rows[0];

      // Check if the values are unchanged
      const updatedName: string = name || user.name;
      const updatedEmail: string = email || user.email;
      const updatedPhone: string = phone || user.phone;
      const updatedProfileImage: string = (files.profile_image as formidable.File)?.newFilename || user.profile_image;
      const updatedUpdateTime: Date = new Date(Date.now())

      const updateQuery: string = 'UPDATE users SET name = $1, email = $2, phone = $3, profile_image = $4, updated_at = $5 WHERE id = $6';
      await client.query(updateQuery, [updatedName, updatedEmail, updatedPhone, updatedProfileImage, updatedUpdateTime, id]);
      console.log("Profile data updated successfully");
      res.json({ success: true, message: "Profile data updated successfully" });
    } catch (err) {
      console.error("Error updating profile data:", err);
      res.json({ success: false, message: "Error updating profile data" });
    }
  });
});

// app.put("/profile/:id",async(req,res)=>{
//   const id = req.params.id;
//   const { name,  email, phone, profile_image } = req.body; 

//   console.log(req.body)
//   try {
//     const updateQuery = `UPDATE users SET name = $1, email = $2, phone = $3,profile_image = $4 WHERE id = $5`;
//     const profileupdata = await client.query(updateQuery, [name,  email, phone, profile_image, id]);
//     console.log("Profile data successfully");
//     res.json({ success: true, message: "Profile data updated successfully", profileupdata });
//   } catch (err) {
//     console.error("Error updating profile data:", err);
//     res.json({ success: false, message: "Error updating profile data" });
//   }

// })






// Serve static files from the 'public' directory

app.get("/restaurant", async (req, res) => {

  try {
    const restaurantReqData = await client.query(`SELECT * FROM restaurants`)
    console.log(req.session.user?.id)
    console.log(restaurantReqData.rows)
    res.json({ success: true, message: "success get restaurant data ", restaurantReq: restaurantReqData.rows})
  } catch (err) {
    console.log("Connot get the restaurants data")
    res.json({ success: false, message: "Connot get the restaurants data" })
  }
})

// app.get("/login-state",async (req, res) =>{
//   if (req.session.user) {
//     res.json({})
//     return //after next() function should return value, or put else
// }


// })



app.use(express.static(path.join(__dirname, 'public')));
app.use("usericon", express.static(path.join(__dirname, 'usericon')));



/////////////////////////////////////Review



const uploadDir = "public/uploads";
fs.mkdirSync(uploadDir, { recursive: true });



app.post("/reviewSubmit", async (req, res) => {
  try {
    // "dial-in" to the postgres server
    let counter = 0;
    const userNameID = req.session.user?.id;
    const restaurantID = req.query.rest;
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
      const rest = [
        fields.content,
        format(new Date(), "MM/dd/yyyy"),
        format(new Date(), "HH:mm"),
        userNameID,
        restaurantID,
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
        "INSERT INTO review (review_content,date_of_review,time_of_review,user_id,restaurant_id,image_upload,title,clean_rank,taste_rank,service_rank,environment_rank,cp_rank,total_rank) VALUES ($1,$2,$3,$4,$5,$6,$7,$8,$9,$10,$11,$12,$13)",
        rest
      );
    });
    res.json({ success: "true" });
  } catch (err) {
    res.json({ success: "false", error: err + "" });
  }
});
// app.get("/reviewTotal/rest/:restData/q/:quantity/p/:page", async (req, res) => {  try {

//   const quantity = +(req.params.quantity as string);
//   const page = +(req.params.page as string);
 
//   const restaurantName = (req.params.restData as String);
//   const restaurantIdJson = await client.query(`SELECT id FROM RESTAURANTS WHERE NAME = $1`, [restaurantName,]);
//   const restaurantId = restaurantIdJson.rows[0].id
//   console.log(restaurantId)
//   if (restaurantName !="All"){
//     const rowsData = await client.query(`SELECT count(*) FROM review where restaurant_id =$1;`,[restaurantId,]);
//     const rowsDataValue = Math.ceil(+rowsData.rows[0].count / quantity);
//     res.json({ reviewNumbers: rowsDataValue });
//   } else{
//   const rowsData = await client.query(`SELECT count(*) FROM review;`);
//   const rowsDataValue = Math.ceil(+rowsData.rows[0].count / quantity);
//   res.json({ reviewNumbers: rowsDataValue });}
// } catch (err) {
//   // }
//   res.json({ success: "false", error: err + "" });
// }});



app.get("/review", async (req, res) => {
  try {

    const restaurantID = req.query.rest;

    console.log(restaurantID)
    if (restaurantID){
      console.log("true")
    const data = await client.query(`SELECT 
    review.image_upload, 
    review.date_of_review, 
    review.time_of_review, 
    review.review_content, 
    review.title,
    restaurants.name as restaurants_name,
    users.name as user_name,
    users.profile_image  as user_profile_image
    FROM review
    inner join users on users.id = review.user_id
    inner join restaurants on restaurants.id = review.restaurant_id where restaurants.id ='${restaurantID}'`);//where ${restaurantId}LIMIT ${quantity} OFFSET ${nowPageOffset}
    res.json({ reviewData: data.rows })
  } else{

    const data = await client.query(`SELECT 
    review.image_upload, 
    review.date_of_review, 
    review.time_of_review, 
    review.review_content, 
    review.title,
    restaurants.name as restaurants_name,
    users.name as user_name,
    users.profile_image  as user_profile_image
    FROM review
    inner join users on users.id = review.user_id
    inner join restaurants on restaurants.id = review.restaurant_id`);
      res.json({ reviewData: data.rows });}//
  } catch (err) {
    // }

    res.json({ success: "false", error: err + "" });
  }
});
app.get("/oneRestaurant", async (req, res) => {
  try {
    const reqData = req.query.rest;;
    // if(reqData === null){
    //   const data = await client.query("SELECT * FROM RESTAURANTS")
    //   res.json({data:data.rows});
    // }else{
    //   const data = await client.query("SELECT * FROM RESTAURANTS WHERE id = $1", [
    //     reqData
    //   ]);
    //   res.json({data:data.rows})
    // }
    const data = await client.query("SELECT * FROM RESTAURANTS WHERE id = $1", [
      reqData,
    ]);
    res.json(data.rows[0]);
  } catch (err) {
    res.json({ success: "false", error: err + "" });
  }
});






//////////////////////////////////////////////////////////////////////////////////////////////////////////
// Define routes handler
app.get('/profile', (_req, res) => {
  res.sendFile(path.join(__dirname, 'public/html', 'profile.html'));
});
// app.get('/home', (_req, res) => {
//   res.sendFile(path.join(__dirname, 'public/html', 'home.html'));
// });
export default app;