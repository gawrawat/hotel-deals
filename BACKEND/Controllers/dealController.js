const Deal = require('../Models/Deal');

// Get all deals
const getAllDeals = async (req, res) => {
  try {
    const deals = await Deal.find().sort({ id: 1 });
    res.status(200).json(deals);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Get deals by category
const getDealsByCategory = async (req, res) => {
  try {
    const { category } = req.params;
    const deals = await Deal.find({ category: category.toLowerCase() }).sort({ id: 1 });
    res.status(200).json(deals);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Search deals
const searchDeals = async (req, res) => {
  try {
    const { q } = req.query;
    const deals = await Deal.find({
      $or: [
        { title: { $regex: q, $options: 'i' } },
        { location: { $regex: q, $options: 'i' } },
        { label: { $regex: q, $options: 'i' } }
      ]
    }).sort({ id: 1 });
    res.status(200).json(deals);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Create a new deal
const createDeal = async (req, res) => {
  try {
    const deal = new Deal(req.body);
    const savedDeal = await deal.save();
    res.status(201).json(savedDeal);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Bulk insert deals
const bulkInsertDeals = async (req, res) => {
  try {
    const deals = req.body;
    const result = await Deal.insertMany(deals, { ordered: false });
    res.status(201).json({ message: `${result.length} deals inserted successfully` });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Update a deal
const updateDeal = async (req, res) => {
  try {
    const { id } = req.params;
    const deal = await Deal.findOneAndUpdate({ id: parseInt(id) }, req.body, { new: true });
    if (!deal) {
      return res.status(404).json({ message: 'Deal not found' });
    }
    res.status(200).json(deal);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Delete a deal
const deleteDeal = async (req, res) => {
  try {
    const { id } = req.params;
    const deal = await Deal.findOneAndDelete({ id: parseInt(id) });
    if (!deal) {
      return res.status(404).json({ message: 'Deal not found' });
    }
    res.status(200).json({ message: 'Deal deleted successfully' });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

module.exports = {
  getAllDeals,
  getDealsByCategory,
  searchDeals,
  createDeal,
  bulkInsertDeals,
  updateDeal,
  deleteDeal
}; 