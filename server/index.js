const express = require('express');
const app = express();
const hostname = 'localhost';
const port = 5000;
require('dotenv').config();
const cors = require('cors');
const cookieParser = require('cookie-parser');
const mongoose = require('mongoose');
const mongodb = process.env.MONGODB;

const routes = require('./Views/route');

// Allow requests from the frontend origin for all routes
app.use(cors({ credentials: true, origin: 'http://localhost:3000' }));
app.use(express.json());
app.use(cookieParser());

// Use the routes with '/auth' prefix
app.use('/auth', routes);

mongoose.connect(mongodb).then(() => {
  console.log('The Db is connected');
}).catch((error) => {
  console.log(error);
});

app.listen(port, hostname, () => {
  console.log(`The server is running on ${hostname}:${port}`);
});


