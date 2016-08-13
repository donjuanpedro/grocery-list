const mongoose = require('mongoose');
const http = require('http');
const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');

const index = require('./routes/index');
const names = require('./routes/items');

const app = express();

mongoose.connect('mongodb://localhost/grocery-list');

// Set our views directory
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({ extended: false }));
app.use('/', index);
app.use('/items', items);


app.get('/items', (req, res) => {
  res.render('index.ejs', { items });
});

const server = http.createServer(app);
const port = 3000;

server.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
