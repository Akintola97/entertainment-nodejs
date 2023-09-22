const mongoose = require('mongoose');

const savedItemSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'user',
  },
  itemType: {
    type: String,
    enum: ['character', 'comic'], // Add more item types if needed
  },
  item: {
    type: mongoose.Schema.Types.ObjectId,
    refPath: 'itemType', // Reference the appropriate model based on itemType
  },
}, { timestamps: true });

const savedItem = mongoose.model('SavedItem', savedItemSchema);

module.exports = savedItem;
