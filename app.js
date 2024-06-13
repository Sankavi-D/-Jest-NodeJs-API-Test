const express = require('express');
const app = express();

app.use(express.json())

app.post('/users', (req, res) => {
  const { username, password } = req.body
  if (!password || !username) {
    res.sendStatus(400)
    return
  }

  res.json({ status_code: 200, message: 'user registration successful' })
});

module.exports = app;