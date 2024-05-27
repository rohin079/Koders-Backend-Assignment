// File: utils/cronJob.js

const cron = require('node-cron');
const { getAllExpenses, modifyExpense } = require('../services/expenseService');

const updateRecurringExpenses = async () => {
  const expenses = await getAllExpenses();
  for (let expense of expenses) {
    if (expense.frequency && expense.frequency !== 'One-Time') {
      const updatedAmount = expense.amount + expense.base;
      await modifyExpense(expense.id, { ...expense, amount: updatedAmount });
    }
  }
};

const startCronJob = () => {
  cron.schedule('0 0 * * *', () => {
    updateRecurringExpenses();
    console.log('Recurring expenses updated.');
  });
};

module.exports = { startCronJob };
