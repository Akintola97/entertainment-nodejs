const mongoose = require('mongoose');


const Characters = mongoose.Schema({
    code: Number, 
    status: String, 
    copyright: String,
    attributionText: String, 
    attributionHTML: String, 
    etag: String, 
    results:[
        {
            id: Number,
            name: String, 
            description: String,
            modified: String, 
            thumbnail: {
                path: String,
                extension: String
            }
        }
    ]
}, {timestamps: true})

const characters = mongoose.model('character_data', Characters);

module.exports = characters;