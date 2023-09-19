const express = require('express');
const routes = express.Router();
const { register, login, authenticate, userInfo, logout } = require('../Controller/authController');




routes.post('/register', register )
routes.post('/login', login  )
routes.get('/userinfo', authenticate, userInfo)
routes.get('/logout', logout)



module.exports = routes;