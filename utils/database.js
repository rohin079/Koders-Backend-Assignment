// File: utils/database.js

const axios = require('axios');

const interactWithDatabase = async (method, url, data = null) => {
  try {
    const config = {
      method: method,
      url: url,
      headers: {
        'Content-Type': 'application/json'
      },
      data: data
    };
    const response = await axios.request(config);
    return response.data;
  } catch (error) {
    console.error(error);
  }
};

module.exports = { interactWithDatabase };
