const express = require('express');
const router = express.Router();
const authController = require('../controllers/authController');

// POST /vi/api/auth/register - Register new user
router.post('/register', authController.register);

// POST /vi/api/auth/login - User login
router.post('/login', authController.login);

module.exports = router;