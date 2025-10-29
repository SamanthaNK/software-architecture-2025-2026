const db = require('../config/database');
const bcrypt = require('bcryptjs');

class User {
    // Create new user
    static async create(userData) {
        const { first_name, last_name, email, phone_number, address, password } = userData;

        // Hash password before storing
        const password_hash = await bcrypt.hash(password, 10);

        const query = `
            INSERT INTO users (first_name, last_name, email, phone_number, address, password)
            VALUES (?, ?, ?, ?, ?, ?)
        `;

        const [result] = await db.execute(query, [
            first_name, last_name, email, phone_number, address, password_hash
        ]);

        return result.insertId;
    }

    // Find user by email
    static async findByEmail(email) {
        const query = 'SELECT * FROM users WHERE email = ?';
        const [rows] = await db.execute(query, [email]);
        return rows[0];
    }

    // Find user by ID
    static async findById(id) {
        const query = 'SELECT id, first_name, last_name, email, phone_number, address, created_at FROM users WHERE id = ?';
        const [rows] = await db.execute(query, [id]);
        return rows[0];
    }

    // Get all users (admin functionality)
    static async findAll() {
        const query = 'SELECT id, first_name, last_name, email, phone_number, created_at FROM users';
        const [rows] = await db.execute(query);
        return rows;
    }

    // Verify password
    static async verifyPassword(plainPassword, hashedPassword) {
        return await bcrypt.compare(plainPassword, hashedPassword);
    }

    // Update user information
    static async update(id, userData) {
        const { first_name, last_name, phone_number, address } = userData;

        const query = `
            UPDATE users
            SET first_name = ?, last_name = ?, phone_number = ?, address = ?
            WHERE id = ?
        `;
        const [result] = await db.execute(query, [first_name, last_name, phone_number, address, id]);

        return result.affectedRows > 0;
    }

    // Delete user
    static async delete(id) {
        const query = 'DELETE FROM users WHERE id = ?';
        const [result] = await db.execute(query, [id]);
        return result.affectedRows > 0;
    }
}

module.exports = User;