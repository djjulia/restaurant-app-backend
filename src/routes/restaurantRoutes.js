const express = require('express');
const Restaurant = require('../models/restaurant');
const Dish = require('../models/dish'); // Import Dish model
const router = express.Router();

// ✅ POST: Add a new restaurant
router.post('/', async (req, res) => {
  try {
    const restaurant = new Restaurant({
      name: req.body.name,
      address: req.body.address,
      cuisine: req.body.cuisine,
      rating: req.body.rating,
    });

    await restaurant.save(); // Save to the database
    res.status(201).json(restaurant);
  } catch (error) {
    console.error('Error adding restaurant:', error);
    res.status(400).json({ message: 'Error adding restaurant' });
  }
});

// ✅ GET: Fetch all restaurants including dishes
router.get('/', async (req, res) => {
  try {
    const restaurants = await Restaurant.find().lean(); // Convert to plain objects

    // ✅ Fetch all dishes for each restaurant
    const restaurantsWithDishes = await Promise.all(
      restaurants.map(async (restaurant) => {
        const dishes = await Dish.find({ restaurantId: restaurant._id }).lean();
        return { ...restaurant, dishes };
      })
    );

    res.status(200).json(restaurantsWithDishes);
  } catch (error) {
    console.error('Error fetching restaurants:', error);
    res.status(400).json({ message: 'Error fetching restaurants' });
  }
});

// ✅ GET: Fetch a single restaurant by ID, including its dishes
router.get('/:id', async (req, res) => {
  try {
    const restaurant = await Restaurant.findById(req.params.id);
    if (!restaurant) {
      return res.status(404).json({ message: 'Restaurant not found' });
    }

    const dishes = await Dish.find({ restaurantId: req.params.id });

    res.status(200).json({ ...restaurant.toObject(), dishes }); // Include dishes in the response
  } catch (error) {
    console.error('Error fetching restaurant:', error);
    res.status(500).json({ message: 'Server error', error: error.message });
  }
});

// ✅ GET: Fetch all dishes for a specific restaurant
router.get('/:id/dishes', async (req, res) => {
  try {
    const dishes = await Dish.find({ restaurantId: req.params.id });

    if (!dishes.length) {
      return res.status(404).json({ message: "No dishes found for this restaurant" });
    }

    res.status(200).json(dishes);
  } catch (error) {
    console.error('Error fetching dishes:', error);
    res.status(500).json({ message: 'Error fetching dishes', error: error.message });
  }
});

module.exports = router;
