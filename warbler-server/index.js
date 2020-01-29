require('dotenv').config();
const express = require('express');
const app = express();
const cors = require('cors');
const errorHandler = require('./handlers/error');
const authRoutes = require('./routes/auth');

const PORT = 8080;

app.use(cors());
app.use(express.json());

app.use('/api/auth', authRoutes);

app.use(function(req, res, next) {
  let err = new Error('Not Found');
  err.status = 404;
  next(err);
});

app.use(errorHandler);

app.listen(PORT, function() {
  console.log(`Server has started on port ${PORT}`);
});
