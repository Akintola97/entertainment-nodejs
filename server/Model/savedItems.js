const mongoose = require('mongoose');

const savedContentSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User', // Reference to the User model for user association
  },
  itemType: {
    type: String,
    enum: ['character', 'comic'], // Add more item types if needed
  },
  imageUrl: String, // URL to the image in your storage solution
  description: String, // Description text
  // Add more fields as needed
}, { timestamps: true });

const SavedContent = mongoose.model('SavedContent', savedContentSchema);

module.exports = SavedContent;
