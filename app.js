const express = require('express');
const bodyParser = require('body-parser');
const mustache = require('mustache-express');
const mongoose = require('mongoose');

mongoose.Promise = require('bluebird');
mongoose.connect('mongodb://localhost:27017/sampledb');

const app = express();

// app.use(express.static('models')) needed?
app.set('views', './views');
app.set('view engine', 'mustache');

app.use(bodyParser.urlencode({ extend: true }));


app.listen(3000, function () {
  console.log('Do what you wanna do')
});
