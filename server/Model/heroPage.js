const mongoose = require('mongoose');


const hero_comic = new mongoose.Schema({
    code: Number,
    status: String,
    copyright: String,
    attributionText: String,
    attributionHTML: String,
    etag: String,
    data: {
      offset: Number,
      limit: Number,
      total: Number,
      count: Number,
      results: [{
        id: Number,
        digitalId: Number,
        title: String,
        issueNumber: Number,
        description: String,
        isbn: String,
        upc: String,
        format: String,
        pageCount: Number,
        resourceURI: String,
        urls: [{
          url: String,
        }],
        prices: [{
          price: Number
        }],
        thumbnail: {
          path: String,
          extension: String,
        },
        images: [{
          path: String,
          extension: String,
        }],
        creators: {
          available: Number,
          collectionURI: String,
          items: [{
            resourceURI: String,
            name: String,
            role: String,
          }],
        }
      }],
    },
  });

const hero_page = mongoose.model('hero_comic', hero_comic);

module.exports = hero_page;

