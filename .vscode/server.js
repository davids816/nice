
 // Add this near your other imports at the top
// TODO: Import user routes
import { todoRouter } from './todos.js'; 
// Add this after your middleware setup
// TODO: Use the user routes with the path '/api'


// TODO: Import required modules
import { todoRouter } from './todos.js';
import express from 'express';
import mongoose from 'mongoose';
import * as dotenv from 'dotenv';
// TODO: Load environment variables
// Hint: Use dotenv.config()
dotenv.config()
// TODO: Initialize Express app
// Hint: const app = express();
const app = express();
const port = 3000;
// TODO: Set up middleware
// 1. Express JSON parser 
// 2. Serve static files from the 'public' directory
app.use(express.json());

app.use('/api', todoRouter);
app.use(express.static('client'));
// TODO: Connect to MongoDB
// Hint: Use mongoose.connect with your MONGODB_URI
// Make sure to handle the connection promise with .then() and .catch()

// mongoose.connect(process.env.MONGODB_URI)
mongoose.connect(process.env.MONGODB_URI)
  .then(() => console.log('Connected to MongoDB'))
  .catch(err => console.error('MongoDB connection error:', err));
// For now, just create a simple root route that responds with a welcome message
app.get('/', (req, res) => {
    res.json('Welcome to my app!');
});

// TODO: Start the server
app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});

process.on("SIGINT", () => {
  console.log("Stopping server...");
  server.close(() => {
    console.log("Server stopped. Port released.");
    process.exit(0);
  });
});

