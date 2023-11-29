// app.js 

const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config();

const app = express();

// Retrieve MongoDB connection string from environment variables
const { MONGODB_URI } = process.env;

// Connect to MongoDB
mongoose.connect(MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => {
    console.log('Connected to MongoDB');
    // Start your server or define routes once connected
    app.listen(3000, () => {
      console.log('Server is running on port 3000');
    });
  })
  .catch((error) => {
    console.error('Error connecting to MongoDB:', error);
  });
