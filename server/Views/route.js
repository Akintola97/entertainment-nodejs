const express = require('express');
const routes = express.Router();
const { register, login, authenticate, userInfo } = require('../Controller/authController');




routes.post('/register', register )
routes.post('/login', login  )
routes.get('/userinfo', authenticate, userInfo)



module.exports = routes;