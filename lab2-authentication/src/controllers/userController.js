const User = require('../models/userModel');

// Get current user profile
exports.getProfile = async (req, res) => {
    try {
        const user = await User.findById(req.userId);

        if (!user) {
            return res.status(404).json({
                success: false,
                message: 'User not found'
            });
        }

        res.status(200).json({
            success: true,
            data: { user }
        });
    } catch (error) {
        console.error('Get profile error:', error);
        res.status(500).json({
            success: false,
            message: 'Server error retrieving profile'
        });
    }
};

// Get all users (admin functionality)
exports.getAllUsers = async (req, res) => {
    try {
        const users = await User.findAll();

        res.status(200).json({
            success: true,
            count: users.length,
            data: { users }
        });
    } catch (error) {
        console.error('Get all users error:', error);
        res.status(500).json({
            success: false,
            message: 'Server error retrieving users'
        });
    }
};

/*
// Update user profile
exports.updateProfile = async (req, res) => {
    try {
        const userId = req.userId;
        const { first_name, last_name, phone_number, address } = req.body;

        // Validation
        if (!first_name || !last_name || !phone_number || !address) {
            return res.status(400).json({
                success: false,
                message: 'All fields are required'
            });
        }

        const updated = await User.update(userId, {
            first_name,
            last_name,
            phone_number,
            address
        });

        if (!updated) {
            return res.status(404).json({
                success: false,
                message: 'User not found'
            });
        }

        res.status(200).json({
            success: true,
            message: 'Profile updated successfully'
        });
    } catch (error) {
        console.error('Update profile error:', error);
        res.status(500).json({
            success: false,
            message: 'Server error updating profile'
        });
    }
};

// Delete user account
exports.deleteAccount = async (req, res) => {
    try {
        const userId = req.userId;

        const deleted = await User.delete(userId);

        if (!deleted) {
            return res.status(404).json({
                success: false,
                message: 'User not found'
            });
        }

        res.status(200).json({
            success: true,
            message: 'Account deleted successfully'
        });
    } catch (error) {
        console.error('Delete account error:', error);
        res.status(500).json({
            success: false,
            message: 'Server error deleting account'
        });
    }
};
*/