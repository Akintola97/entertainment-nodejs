const express = require('express');
const routes = express.Router();
const { register, login, authenticate, userInfo, logout, saveCharacter, getSavedCharacters } = require('../Controller/authController');




routes.post('/register', register )
routes.post('/login', login  )
routes.get('/userinfo', authenticate, userInfo)
routes.get('/logout', logout)
routes.post('/saveCharacter', authenticate,  saveCharacter);
routes.get('/savedCharacters', authenticate,  getSavedCharacters);


module.exports = routes;