const fs = require('fs');
const path = require('path');
const app = require('express')();
const proxy = require('./proxy');


proxy(app);

module.exports = app;
