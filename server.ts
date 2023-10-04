// This file sets up the Express.js server and starts listening for incoming requests.
import app from './app';

// Start the server
const PORT = 8080;
app.listen(PORT, () => {
  console.log(`listening at http://localhost:${PORT}`);
});
