const express = require('express');

const app = express();

const projectRoutes = require('./api/routes/projects');
const transactionsRoutes = require('./api/routes/transactions');

app.use('/projects', projectRoutes);
app.use('/transactions', transactionsRoutes);

module.exports = app;
