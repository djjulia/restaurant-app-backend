const mongoose = require('mongoose');
const Dish = require('../models/dish');

mongoose.connect('mongodb+srv://sorciereus:testDataBase12345@cluster0.in1pl.mongodb.net/restaurant-app?retryWrites=true&w=majority&appName=Cluster0', {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => console.log('✅ Connected to MongoDB Atlas'))
  .catch(err => console.error('❌ MongoDB connection error:', err));

const dishes = [
  // ✅ PlanetDisco Diner (67bd319c42a718b2a019fdc2)
  { name: "Cosmic Burger", description: "A juicy galactic burger with nebula sauce.", price: 14.99, restaurantId: "67bd319c42a718b2a019fdc2" },
  { name: "Meteor Fries", description: "Crispy fries with asteroid seasoning.", price: 5.99, restaurantId: "67bd319c42a718b2a019fdc2" },

  // ✅ Intergalactic Bistro (67bd31c142a718b2a019fdc5)
  { name: "Nebula Pasta", description: "Handmade pasta infused with cosmic flavors.", price: 12.49, restaurantId: "67bd31c142a718b2a019fdc5" },
  { name: "Supernova Soup", description: "A spicy soup that’s out of this world.", price: 8.99, restaurantId: "67bd31c142a718b2a019fdc5" },

  // ✅ Stellar Sweets (67bd31c342a718b2a019fdc7)
  { name: "Galactic Donuts", description: "Donuts topped with stardust sugar.", price: 6.49, restaurantId: "67bd31c342a718b2a019fdc7" },
  { name: "Milky Way Cheesecake", description: "A creamy cheesecake with cosmic swirls.", price: 7.99, restaurantId: "67bd31c342a718b2a019fdc7" },

  // ✅ Orbit Grill (67bd31c642a718b2a019fdc9)
  { name: "Asteroid Steak", description: "Perfectly grilled steak from another galaxy.", price: 18.99, restaurantId: "67bd31c642a718b2a019fdc9" },
  { name: "Lunar Lobster", description: "Fresh lobster with a zero-gravity butter sauce.", price: 22.49, restaurantId: "67bd31c642a718b2a019fdc9" },

  // ✅ Happy Greens (67be8923397e9b58551e7fec)
  { name: "Solar Salad", description: "A healthy mix of interplanetary greens.", price: 9.99, restaurantId: "67be8923397e9b58551e7fec" },
  { name: "Celestial Wrap", description: "A protein-packed wrap for space travelers.", price: 10.99, restaurantId: "67be8923397e9b58551e7fec" },

  // ✅ The Raven (67bfd92312f60536647a0fae)
  { name: "Cosmic Crab Cakes", description: "Fresh crab cakes with nebula sauce.", price: 15.99, restaurantId: "67bfd92312f60536647a0fae" },
  { name: "Stellar Salmon", description: "Salmon glazed with black hole spices.", price: 17.99, restaurantId: "67bfd92312f60536647a0fae" }
];

const addDishes = async () => {
  try {
    await Dish.insertMany(dishes);
    console.log('✅ Dishes added successfully!');
    mongoose.connection.close();
  } catch (error) {
    console.error('❌ Error adding dishes:', error);
    mongoose.connection.close();
  }
};

addDishes();
