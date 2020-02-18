require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const routes = require('./routes');
var cors = require('cors');

const PORT = process.env.PORT || 3001;

const app = express();

//for parsing json
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(cors());

//if in production, serve up our minified react application
//aksdjf

app.use(routes);

//establish connection to mongodb
const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://localhost/scraper';

//connect to mongo
mongoose.connect(MONGODB_URI);

app.listen(PORT, () => {
	console.log(`PORT LISTENING ON PORT: ${PORT}`);
});
