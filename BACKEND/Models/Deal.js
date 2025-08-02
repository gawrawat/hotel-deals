const mongoose = require('mongoose');

const dealSchema = new mongoose.Schema({
  id: {
    type: Number,
    required: true,
    unique: true
  },
  location: {
    type: String,
    required: true
  },
  title: {
    type: String,
    required: true
  },
  reviews: {
    type: Number,
    default: 0
  },
  image: {
    type: String,
    required: true
  },
  features: [{
    type: String
  }],
  normalPrice: {
    type: String,
    required: true
  },
  discountedPrice: {
    type: String,
    required: true
  },
  category: {
    type: String,
    required: true
  },
  label: {
    type: String,
    required: true
  },
  purchased: {
    type: Number,
    default: 0
  },
  detailsUrl: {
    type: String,
    required: true
  },
  bookUrl: {
    type: String,
    required: true
  }
}, {
  timestamps: true
});

module.exports = mongoose.model('Deal', dealSchema); 