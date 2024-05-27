// File: controllers/expenseController.js

const { getAllExpenses, addExpense, modifyExpense, removeExpense } = require('../services/expenseService');

const getExpenses = async (req, res) => {
  const expenses = await getAllExpenses();
  res.json(expenses);
};

const createExpense = async (req, res) => {
  const newExpense = req.body;
  const createdExpense = await addExpense(newExpense);
  res.json(createdExpense);
};

const updateExpense = async (req, res) => {
  const { id } = req.params;
  const updatedExpense = req.body;
  const updated = await modifyExpense(id, updatedExpense);
  res.json(updated);
};

const deleteExpense = async (req, res) => {
  const { id } = req.params;
  await removeExpense(id);
  res.sendStatus(204);
};

module.exports = { getExpenses, createExpense, updateExpense, deleteExpense };
