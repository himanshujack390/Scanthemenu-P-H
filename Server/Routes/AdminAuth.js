const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const router = express.Router();

// Middleware
router.use(cors());
router.use(bodyParser.urlencoded({ extended: false }));
router.use(bodyParser.json());

// Dummy user data
const users = [
  { id: 1, username: process.env.ADMINUSERNAME, password: process.env.PASSWORD },
];

// Login route
router.post('/login', (req, res) => {
  const { username, password } = req.body;
  const user = users.find((u) => u.username === username && u.password === password);

  if (user) {
    res.json({ success: true, message: 'Login successful!' });
  } else {
    res.json({ success: false, message: 'Invalid credentials.' });
  }
});

module.exports = router;