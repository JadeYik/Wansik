import path from "path";
import { Client } from "pg";
import dotenv from "dotenv";
dotenv.config();

interface UserData {
    name: string;
    email: string;
    phone: string;
    profile_image: string;
  }
  


export async function main(){
     const client = new Client({
        database: process.env.DB_NAME,
        user: process.env.DB_USERNAME,
        password: process.env.DB_PASSWORD,
        port: 5433
      });
    
    client.connect();
    
    const PROFILE_JSON_PATH = path.join(__dirname, "database", "profile.json");
    const profilejsonData = JSON.parse(PROFILE_JSON_PATH)

    try {
        // Insert the JSON data into the database
        const query =
          'INSERT INTO users (name, email, phone, profile_image, created_at , updated_at) VALUES ($1, $2, $3, $4, $5, $5)';
        const values = [
        profilejsonData.name,
        profilejsonData.email,
        profilejsonData.phone,
        profilejsonData.profile_image,
        new Date()
        ];
        await client.query(query, values);
        console.log('JSON data inserted successfully into PostgreSQL');
      } catch (error) {
        console.log('Error inserting JSON data into PostgreSQL:', error);
      } finally {
        // Disconnect from the database
        await client.end();
      }
    }
    
main()