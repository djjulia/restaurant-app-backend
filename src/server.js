const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const restaurantRoutes = require('./routes/restaurantRoutes');
const userRoutes = require('./routes/userRoutes');
const dishRoutes = require('./routes/dishRoutes');

const app = express();
const port = 5000;

//  Middleware
app.use(cors());
app.use(express.json()); // Allows parsing JSON request bodies

//  MongoDB Connection
mongoose.connect('mongodb+srv://sorciereus:testDataBase12345@cluster0.in1pl.mongodb.net/restaurant-app?retryWrites=true&w=majority&appName=Cluster0')
  .then(() => console.log('✅ MongoDB connected successfully'))
  .catch((err) => {
    console.error('❌ MongoDB connection error:', err);
    process.exit(1); // Stop the server if MongoDB fails
  });

//  Routes
app.use('/api/restaurants', restaurantRoutes); // Fix: Ensure /api/restaurants works
app.use('/api/users', userRoutes); // Ensure user routes are properly loaded
app.use('/api/dishes', dishRoutes); //routes to search dishes from search bar

//  Home Route
app.get('/', (req, res) => {
  res.send('Hello, world! Welcome to the Restaurant App.');
});

//  Start the Server
app.listen(port, () => {
  console.log(`🚀 Server running on http://localhost:${port}`);
});
