const express = require('express');
const { marvelhero, db, marvelcomics, comic_db } = require('../Controller/marvelController');

const marvel_route = express.Router();


marvel_route.get('/characters', marvelhero )
marvel_route.get('/comics', marvelcomics)
marvel_route.get('/db', db)
marvel_route.get('/comic/db', comic_db)








module.exports = marvel_route