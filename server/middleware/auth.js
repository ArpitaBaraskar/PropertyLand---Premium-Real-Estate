const bcrypt = require('bcryptjs');

const adminAuth = async (req, res, next) => {
  try {
    const { password } = req.body;
    
    if (!password) {
      return res.status(401).json({ message: 'Admin password required' });
    }

    // Simple password check (in production, use proper JWT authentication)
    if (password !== process.env.ADMIN_PASSWORD) {
      return res.status(401).json({ message: 'Invalid admin credentials' });
    }

    next();
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
};

module.exports = { adminAuth };