const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const router = require('./routes/routes.js');

dotenv.config();
const app = express();

app.use(express.json())

const PORTNUMBER = 8080;

mongoose.connect(process.env.MONGODB_URL)
  .then(() => console.log('Connected to MongoDB'))
  .catch((error) => console.log('MongoDB connection error', error.message));

app.use('/', router);

app.listen(PORTNUMBER, () => console.log('Server is running on port -', PORTNUMBER));



