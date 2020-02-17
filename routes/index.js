const app = require('express').Router();
const path = require('path');

const apiRoutes = require('./api');

app.use('/api', apiRoutes);

module.exports = app;
