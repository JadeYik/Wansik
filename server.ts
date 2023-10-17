// This file sets up the Express.js server and starts listening for incoming requests.
import path from 'path';
import app from './app';
// import express, { Request, Response, NextFunction } from "express";






app.get('/',(_req, res) => {
  res.sendFile(path.join(__dirname, 'public/html', 'home.html'));
});

// Start the server
const PORT = 8080;
app.listen(PORT, () => {
  console.log(`listening at http://localhost:${PORT}`);
});


app.use('/',(_req, res) => {
  res.sendFile(path.join(__dirname, 'public/html', '404.html'));
});
