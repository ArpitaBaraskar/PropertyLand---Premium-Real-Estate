const mongoose = require('mongoose');

const PropertySchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    trim: true
  },
  description: {
    type: String,
    required: true
  },
  price: {
    type: Number,
    required: true
  },
  location: {
    type: String,
    required: true
  },
  image: {
    type: String,
    required: true
  },
  bedrooms: {
    type: Number,
    default: 1
  },
  bathrooms: {
    type: Number,
    default: 1
  },
  area: {
    type: Number,
    default: 0
  },
  type: {
    type: String,
    enum: ['house', 'apartment', 'condo', 'villa'],
    default: 'house'
  },
  featured: {
    type: Boolean,
    default: false
  }
}, {
  timestamps: true
});

module.exports = mongoose.model('Property', PropertySchema);