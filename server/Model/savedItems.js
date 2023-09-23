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
  characterId: {
    type: String,
    unique: true, 
    required: true, 
  },
  characterName: String, 
  imageUrl: String,
  description: String, 
}, { timestamps: true });


const SavedContent = mongoose.model('SavedContent', savedContentSchema);

module.exports = SavedContent;
