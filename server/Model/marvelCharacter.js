const mongoose = require('mongoose');


const Character = mongoose.Schema({
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

const character = mongoose.model('character', Character);

module.exports = character;