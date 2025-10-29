// Email validation regex
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

// Phone validation
const phoneRegex = /^[\d\s\-\+\(\)]+$/;

const validateRegistration = (data) => {
    const errors = [];

    // First name validation
    if (!data.first_name || data.first_name.trim().length < 2) {
        errors.push('First name must be at least 2 characters');
    }

    // Last name validation
    if (!data.last_name || data.last_name.trim().length < 2) {
        errors.push('Last name must be at least 2 characters');
    }

    // Email validation
    if (!data.email || !emailRegex.test(data.email)) {
        errors.push('Valid email is required');
    }

    // Phone validation
    if (!data.phone_number || !phoneRegex.test(data.phone_number)) {
        errors.push('Valid phone number is required');
    }

    // Address validation
    if (!data.address || data.address.trim().length < 10) {
        errors.push('Address must be at least 10 characters');
    }

    // Password validation
    if (!data.password || data.password.length < 8) {
        errors.push('Password must be at least 8 characters');
    }

    return {
        isValid: errors.length === 0,
        errors
    };
};

const validateLogin = (data) => {
    const errors = [];

    if (!data.email || !emailRegex.test(data.email)) {
        errors.push('Valid email is required');
    }

    if (!data.password) {
        errors.push('Password is required');
    }

    return {
        isValid: errors.length === 0,
        errors
    };
};

module.exports = {
    validateRegistration,
    validateLogin
};