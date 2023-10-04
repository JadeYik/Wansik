// This file contains the main application logic, including routing and middleware configuration.
import express from 'express';
import path from 'path';

const app = express();

// Third party middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Serve static files from the 'public' directory
app.use(express.static(path.join(__dirname, 'public')));

// Define routes handler
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public/html', 'index.html'));
});



export default app;