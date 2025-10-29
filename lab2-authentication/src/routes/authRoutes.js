const express = require('express');
const router = express.Router();
const authController = require('../controllers/authController');

// POST /v1/api/auth/register - Register new user
router.post('/register', authController.register);

// POST /v1/api/auth/login - User login
router.post('/login', authController.login);

module.exports = router;