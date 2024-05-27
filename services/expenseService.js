// File: services/expenseService.js

const { interactWithDatabase } = require('../utils/database');

const STRAPI_URL = 'http://strapi.koders.in/api/expenses/';

const getAllExpenses = async () => {
  return await interactWithDatabase('get', STRAPI_URL);
};

const addExpense = async (expense) => {
  return await interactWithDatabase('post', STRAPI_URL, expense);
};

const modifyExpense = async (id, expense) => {
  return await interactWithDatabase('put', `${STRAPI_URL}${id}`, expense);
};

const removeExpense = async (id) => {
  return await interactWithDatabase('delete', `${STRAPI_URL}${id}`);
};

module.exports = { getAllExpenses, addExpense, modifyExpense, removeExpense };
