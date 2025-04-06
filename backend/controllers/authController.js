const jwt = require('jsonwebtoken');
const asyncHandler = require('express-async-handler');

// Mock user data for demonstration
const users = [
  {
    id: 1,
    email: 'demo@lifesync.com',
    password: 'password123' // In production, this would be hashed
  }
];

// @desc    Login user & get token
// @route   POST /api/v1/auth/login
// @access  Public
const loginUser = asyncHandler(async (req, res) => {
  const { email, password } = req.body;

  const user = users.find(u => u.email === email);

  if (user && user.password === password) { // In production, use proper password comparison
    const token = jwt.sign(
      { id: user.id, email: user.email },
      process.env.JWT_SECRET || 'your-secret-key',
      { expiresIn: '30d' }
    );

    res.json({
      id: user.id,
      email: user.email,
      token
    });
  } else {
    res.status(401);
    throw new Error('Invalid email or password');
  }
});

// @desc    Get current user profile
// @route   GET /api/v1/auth/profile
// @access  Private
const getUserProfile = asyncHandler(async (req, res) => {
  const user = users.find(u => u.id === req.user.id);

  if (user) {
    res.json({
      id: user.id,
      email: user.email
    });
  } else {
    res.status(404);
    throw new Error('User not found');
  }
});

module.exports = {
  loginUser,
  getUserProfile
};