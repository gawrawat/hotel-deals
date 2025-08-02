const express = require('express');
const router = express.Router();
const {
  getAllDeals,
  getDealsByCategory,
  searchDeals,
  createDeal,
  bulkInsertDeals,
  updateDeal,
  deleteDeal
} = require('../Controllers/dealController');

// Get all deals
router.get('/', getAllDeals);

// Search deals
router.get('/search', searchDeals);

// Get deals by category
router.get('/category/:category', getDealsByCategory);

// Create a new deal
router.post('/', createDeal);

// Bulk insert deals
router.post('/bulk', bulkInsertDeals);

// Update a deal
router.put('/:id', updateDeal);

// Delete a deal
router.delete('/:id', deleteDeal);

module.exports = router; 