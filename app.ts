// This file contains the main application logic, including routing and middleware configuration.
import express, { Request, Response, NextFunction } from "express";
import path from 'path';
import formidable from 'formidable'
import fs from 'fs'
import { client } from "./db";
import expressSession from "express-session";
// import {authRoutes} from "./authRoutes"
import { User } from "./models";
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
  
    res.status(400).json({ success: false, message: "missing username or password" });
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

app.get("/profile", async (req, res) => {

  try {
    const profileReqData = await client.query(`SELECT * FROM users where id = $1;`, [req.session.user?.id])
    const historyReqData = await client.query(`SELECT * FROM appointment where user_id = $1;`, [req.session.user?.id])
    console.log(req.session.user?.id)
    console.log(profileReqData.rows[0])
    console.log(historyReqData.rows[0])
    console.log(historyReqData.rows)
    res.json({ success: true, message: "success2", profileReq: profileReqData.rows[0], historyReq: historyReqData.rows })
  } catch (err) {
    console.log("Connot get the profile data")
    res.json({ success: false, message: "Connot get the profile data" })
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
app.use(express.static(path.join(__dirname, 'public')));
app.use("usericon", express.static(path.join(__dirname, 'usericon')));


// Define routes handler
app.get('/profile', (_req, res) => {
  res.sendFile(path.join(__dirname, 'public/html', 'profile.html'));
});
// app.get('/home', (_req, res) => {
//   res.sendFile(path.join(__dirname, 'public/html', 'home.html'));
// });
export default app;