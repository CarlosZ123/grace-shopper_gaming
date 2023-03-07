const path = require('path');
const express = require('express');
const morgan = require('morgan');
const app = express();

// logging middleware
app.use(morgan('dev'));

// body parsing middleware
app.use(express.json());

// auth and api routes
// app.use('/auth', require('./auth'))

<<<<<<< Updated upstream
app.use('/api/users', require('./api/users'));
app.use('/api', require('./api/login'));
app.use('/api', require('./api/signUp'));
app.use('/api/products', require('./api/products'));
=======
app.use("/api/users", require("./api/users"));
app.use("/api", require("./api/login"));
app.use("/api", require("./api/signUp"));
app.use("/api/products", require("./api/products"));
app.use("/api/checkout", require("./api/checkout"));
app.use("/api/orders", require("./api/orders"));
app.use("/api/wishlist", require("./api/wishList"));
app.use('/api/cart', require("./api/cart"));
// app.use('/api/games', require("./api/games"));
>>>>>>> Stashed changes

app.get('/', (req, res) =>
  res.sendFile(path.join(__dirname, '..', 'public/index.html'))
);

// static file-serving middleware
app.use(express.static(path.join(__dirname, '..', 'public')));

// any remaining requests with an extension (.js, .css, etc.) send 404
app.use((req, res, next) => {
  if (path.extname(req.path).length) {
    const err = new Error('Not found');
    err.status = 404;
    next(err);
  } else {
    next();
  }
});

// sends index.html
app.use('*', (req, res) => {
  res.sendFile(path.join(__dirname, '..', 'public/index.html'));
});

// error handling endware
app.use((err, req, res, next) => {
  console.error(err);
  console.error(err.stack);
  res.status(err.status || 500).send(err.message || 'Internal server error.');
});

module.exports = app;
