const express = require('express');
const app = express();
require('dotenv').config();
const port = process.env.PORT||10000; 
const cors = require('cors');
const cookieParser = require('cookie-parser');
const mongoose = require('mongoose');
const mongodb = process.env.MONGODB;
const path = require('path');

const routes = require('./Views/route');
const marvel_route = require('./Views/marvelroute');

// Allow requests from the frontend origin for all routes
// app.use(cors({ credentials: true, origin: "http://localhost:3000"}));
app.use(cors({ credentials: true, origin: "https://boltluna.io"}));
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

app.use('/marvel', express.static(path.join(__dirname, 'client/build')));

// Catch-all route to serve the React app's HTML file
app.get('/*', (req, res) => {
  res.sendFile(path.join(__dirname, 'client', 'build', 'index.html'));
});



app.listen(port, () => {
  console.log(`The server is running on ${port}`);
});


