const express = require('express');
const { marvelhero, db } = require('../Controller/marvelController');
const marvel_route = express.Router();


marvel_route.get('/characters', marvelhero )
marvel_route.get('/db', db)






module.exports = marvel_route