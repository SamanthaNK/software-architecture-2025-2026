const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');
const { authenticateToken } = require('../middleware/auth');

// All user routes require authentication

// GET /v1/api/users/profile - Get current user profile
router.get('/profile', authenticateToken, userController.getProfile);

// GET /v1/api/users - Get all users
router.get('/', authenticateToken, userController.getAllUsers);

/*
// PUT /v1/api/users/profile - Update user profile
router.put('/profile', authenticateToken, userController.updateProfile);

// DELETE /v1/api/users/account - Delete user account
router.delete('/account', authenticateToken, userController.deleteAccount);
*/

module.exports = router;