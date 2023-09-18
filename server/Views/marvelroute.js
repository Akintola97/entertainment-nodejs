const express = require('express');
const { marvelhero } = require('../Controller/marvelController');
const marvel_route = express.Router();


marvel_route.get('/characters', marvelhero )





module.exports = marvel_route