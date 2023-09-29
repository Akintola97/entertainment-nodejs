const express = require('express');
const { hero_page, db, marvelcomics, comic_db, comic_search, character, character_search, character_db } = require('../Controller/marvelController');

const marvel_route = express.Router();


marvel_route.get('/comic/hero', hero_page  )
marvel_route.get('/comics', marvelcomics)
marvel_route.get('/db', db)
marvel_route.get('/comic/db', comic_db)
marvel_route.post('/comic/search', comic_search)
marvel_route.get('/character', character )
marvel_route.get('/character/db', character_db)
marvel_route.post('/character/search', character_search)






module.exports = marvel_route