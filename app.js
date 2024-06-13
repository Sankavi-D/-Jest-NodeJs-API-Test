const express = require('express');
const app = express();

app.post('/users', (req, res) => {
  res.json({ status_code: 200, message: 'success' })
});

module.exports = app;