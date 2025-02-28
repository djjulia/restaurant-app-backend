const express = require('express');
const Dish = require('../models/dish');

const router = express.Router();

// GET: Fetch all dishes
router.get('/', async (req, res) => {
  try {
    const dishes = await Dish.find();
    res.status(200).json(dishes);
  } catch (error) {
    console.error('Error fetching dishes:', error);
    res.status(500).json({ message: 'Error fetching dishes' });
  }
});

module.exports = router;
