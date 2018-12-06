const express = require('express');
const app = express();
const morgan = require('morgan');

const projectRoutes = require('./api/routes/projects');
const transactionsRoutes = require('./api/routes/transactions');

app.use(morgan('dev'));

app.use('/projects', projectRoutes);
app.use('/transactions', transactionsRoutes);

app.use((req, res, next) => {
      const error = new Error('Not found');
      error.status = 404;
      next(error);
});

app.use((error, req, res, next) => {
      res.status(error.status || 500);
      res.json({
            error: {
                  message: error.message,
            },
      });
});

module.exports = app;
