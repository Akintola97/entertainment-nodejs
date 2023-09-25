const express = require('express');
const routes = express.Router();
const { register, login, authenticate, userInfo, logout, saveCharacter, getSavedCharacters, removeCharacter, getSavedCharacterById } = require('../Controller/authController');




routes.post('/register', register )
routes.post('/login', login  )
routes.get('/userinfo', authenticate, userInfo)
routes.get('/logout', authenticate, logout)
routes.post('/saveCharacter', authenticate,  saveCharacter);
routes.get('/savedCharacters', authenticate,  getSavedCharacters);
routes.get('/savedCharacters/:characterId', authenticate, getSavedCharacterById)
routes.delete('/removecharacter/:characterId', authenticate, removeCharacter)


module.exports = routes;