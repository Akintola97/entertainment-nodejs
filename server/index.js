const express = require('express');
const app = express();
const hostname = process.env.HOSTNAME || '0.0.0.0';
const port = process.env.PORT || 5000;
require('dotenv').config();
const cors = require('cors');
const cookieParser = require('cookie-parser');
const mongoose = require('mongoose');
const mongodb = process.env.MONGODB;

const routes = require('./Views/route');
const marvel_route = require('./Views/marvelroute');

// Allow requests from the frontend origin for all routes
app.use(cors({ credentials: true, origin: "http://localhost:3000"}));
app.use(express.json());
app.use(cookieParser());

// Use the routes with '/auth' prefix
app.use('/auth', routes);
app.use('/marvel', marvel_route);

mongoose.connect(mongodb).then(() => {
  console.log('The Db is connected');
}).catch((error) => {
  console.log(error);
});

app.listen(port, hostname, () => {
  console.log(`The server is running on ${hostname}:${port}`);
});


