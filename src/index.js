const express = require('express');
const mongodb = require('mongoose');
const router = require('./routes/routes.js')

const app = express();

const PORTNUMBER = 8080;
const MongoDBURl = 'mongodb+srv://ravi:3S36QyVxnbtiUrlK@cluster0.tt7wzcu.mongodb.net/'

mongodb.connect(MongoDBURl)
.then(() => console.log('Connected to MongoDB'))
.catch((error) => console.log('MongoDB connection error', error.message));

app.use('/',router);

app.listen(PORTNUMBER,()=>console.log('Server is running on port -',PORTNUMBER));



