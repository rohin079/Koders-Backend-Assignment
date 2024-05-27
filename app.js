// File: app.js

const express = require('express');
const expenseRoutes = require('./routes/expenseRoutes');
const { startCronJob } = require('./utils/cronJob');

const app = express();
app.use(express.json());

app.use('/expenses', expenseRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
  startCronJob();
});

module.exports = app;
