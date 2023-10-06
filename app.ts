// This file contains the main application logic, including routing and middleware configuration.
import express, { Request, Response, NextFunction } from "express";
import path from 'path';
import formidable from 'formidable'
import fs from 'fs'
import { client } from "./db";


const app = express();

const usericonDir = 'usericon'
fs.mkdirSync(usericonDir, { recursive: true })

//input profile json file
const PROFILE_JSON_PATH = path.join(__dirname, "database", "profile.json");

// Third party middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());


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
 
  try{
  const profileReqData = await client.query(`SELECT * FROM users`)
  console.log(profileReqData)
  res.json({success: true, message: "success", profileReqData})
  } catch(err){
    console.log("Connot get the profile data")
    res.json({success: false, message: "Connot get the profile data" })
  }
 
})

app.put("/profile/:id", async (req: Request, res: Response) => {
  
  const id: string = req.params.id;
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
    } });

  form.parse(req, async (err, fields, files) => {
    if (err) {
      console.error("Error parsing form data:", err);
      res.json({ success: false, message: "Error parsing form data" });
      return;
    }

    const { name, email, phone }: { name?: string, email?: string, phone?: string } = fields;
    const { profile_image } = files;

    try {
      const selectQuery: string = 'SELECT * FROM users WHERE id = $1';
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
      const updatedProfileImage: string =  (profile_image as formidable.File)?.newFilename|| user.profile_image;

      const updateQuery: string = 'UPDATE users SET name = $1, email = $2, phone = $3, profile_image = $4 WHERE id = $5';
      await client.query(updateQuery, [updatedName, updatedEmail, updatedPhone, updatedProfileImage, id]);
      console.log("Profile data updated successfully");
      res.json({ success: true, message: "Profile data updated successfully" });
    } catch (err) {
      console.error("Error updating profile data:", err);
      res.json({ success: false, message: "Error updating profile data" });
    }
  });
});




// app.put("/profile/:id", async (req, res) => {
//   const id = req.params.id;
  
//   const form = formidable({ multiples: true });

//   form.parse(req, async (err, fields, files) => {
//     if (err) {
//       console.error("Error parsing form data:", err);
//       res.json({ success: false, message: "Error parsing form data" });
//       return;
//     }

//     const { name, email, phone } = fields;
//     const { profile_image } = files;

//     try {
      
//       const updateQuery = 'UPDATE users SET name = $1, email = $2, phone = $3, profile_image = $4 WHERE id = $5';
//       const profileupdata =  await client.query(updateQuery, [name, email, phone, (profile_image as formidable.File)?.newFilename, id]);
//       console.log("Profile data updated successfully");
//       res.json({ success: true, message: "Profile data updated successfully",profileupdata });
//     } catch (err) {
//       console.error("Error updating profile data:", err);
//       res.json({ success: false, message: "Error updating profile data" });
//     }
//   });
// });


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

// Define routes handler
app.get('/profile', (req, res) => {
  res.sendFile(path.join(__dirname, 'public/html', 'profile.html'));
});

export default app;