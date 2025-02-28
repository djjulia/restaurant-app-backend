const mongoose = require('mongoose');

const restaurantSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      unique: true, // Restaurant names must be unique
      trim: true, // Remove extra spaces
    },
    address: {
      type: String,
      required: true,
    },
    cuisine: {
      type: String,
      required: true,
    },
    rating: {
      type: Number,
      required: true,
      min: 0, // Rating can’t be negative
      max: 5, // Rating out of 5 stars
    },
    phone: {
      type: String,
      required: false,
    },
    website: {
      type: String,
      required: false,
    },
    openingHours: {
      type: String,
      required: false,
    },
  },
  { timestamps: true } // Adds createdAt and updatedAt fields
);

const Restaurant = mongoose.model('Restaurant', restaurantSchema);

module.exports = Restaurant;
