// This file contains the main application logic, including routing and middleware configuration.
import express, { Request, Response, NextFunction } from "express";
import path from 'path';
import formidable from 'formidable'
import fs from 'fs'
import { Client } from "pg";
import dotenv from "dotenv";
dotenv.config();
export const client = new Client({
  database: process.env.DB_NAME,
  user: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  port: Number(process.env.DB_PORT),
});

const app = express();

const usericonDir = 'usericon'
fs.mkdirSync(usericonDir, { recursive: true })

//input profile json file
const PROFILE_JSON_PATH = path.join(__dirname, "database", "profile.json");

// Third party middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());


app.post("/profile", async (req, res) => {
    client.connect();
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
      console.log('Error inserting profile data into PostgreSQL:', error);
      res.json({ success: false, message: "fail" + error })
    }
      
      await client.end();
    


  })

})









// Serve static files from the 'public' directory
app.use(express.static(path.join(__dirname, 'public')));

// Define routes handler
app.get('/profile', (req, res) => {
  res.sendFile(path.join(__dirname, 'public/html', 'profile.html'));
});

export default app;