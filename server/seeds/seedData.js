const mongoose = require('mongoose');
const Property = require('../models/Property');
require('dotenv').config();

const sampleProperties = [
  {
    title: "Modern Villa in Beverly Hills",
    description: "Stunning 4-bedroom villa with panoramic city views, modern amenities, and luxurious finishes throughout.",
    price: 2500000,
    location: "Beverly Hills, CA",
    image: "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=800",
    bedrooms: 4,
    bathrooms: 3,
    area: 3500,
    type: "villa",
    featured: true
  },
  {
    title: "Downtown Luxury Apartment",
    description: "Contemporary 2-bedroom apartment in the heart of downtown with premium amenities and city views.",
    price: 750000,
    location: "Downtown LA, CA",
    image: "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=800",
    bedrooms: 2,
    bathrooms: 2,
    area: 1200,
    type: "apartment",
    featured: true
  },
  {
    title: "Cozy Family House",
    description: "Perfect family home with 3 bedrooms, large backyard, and quiet neighborhood location.",
    price: 485000,
    location: "Pasadena, CA",
    image: "https://images.unsplash.com/photo-1570129477492-45c003edd2be?w=800",
    bedrooms: 3,
    bathrooms: 2,
    area: 1800,
    type: "house",
    featured: false
  },
  {
    title: "Oceanfront Condo",
    description: "Beautiful oceanfront condominium with direct beach access and breathtaking sunset views.",
    price: 920000,
    location: "Santa Monica, CA",
    image: "https://images.unsplash.com/photo-1512917774080-9991e1e5d700?w=800",
    bedrooms: 2,
    bathrooms: 2,
    area: 1100,
    type: "condo",
    featured: true
  },
  {
    title: "Suburban Dream Home",
    description: "Spacious 5-bedroom home perfect for large families, featuring a pool and two-car garage.",
    price: 625000,
    location: "Orange County, CA",
    image: "https://images.unsplash.com/photo-1518780664697-55e3ad937233?w=800",
    bedrooms: 5,
    bathrooms: 3,
    area: 2800,
    type: "house",
    featured: false
  },
  {
    title: "Modern Studio Loft",
    description: "Trendy studio loft in arts district with exposed brick, high ceilings, and industrial charm.",
    price: 385000,
    location: "Arts District, LA",
    image: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=800",
    bedrooms: 1,
    bathrooms: 1,
    area: 650,
    type: "apartment",
    featured: false
  }
];

const seedDatabase = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    console.log('Connected to MongoDB');

    // Clear existing properties
    await Property.deleteMany({});
    console.log('Cleared existing properties');

    // Insert sample properties
    const properties = await Property.insertMany(sampleProperties);
    console.log(`Inserted ${properties.length} properties`);

    console.log('Database seeded successfully!');
    process.exit(0);
  } catch (error) {
    console.error('Error seeding database:', error);
    process.exit(1);
  }
};

seedDatabase();