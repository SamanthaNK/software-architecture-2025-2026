const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');
const { authenticateToken } = require('../middleware/auth');

// All user routes require authentication

// GET /vi/api/users/profile - Get current user profile
router.get('/profile', authenticateToken, userController.getProfile);

// GET /vi/api/users - Get all users
router.get('/', authenticateToken, userController.getAllUsers);

// PUT /vi/api/users/profile - Update user profile
router.put('/profile', authenticateToken, userController.updateProfile);

// DELETE /vi/api/users/account - Delete user account
router.delete('/account', authenticateToken, userController.deleteAccount);

module.exports = router;