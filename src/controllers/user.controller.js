const { createUser } = require('../services/user.service');

const registerUser = async (req, res) => {
    try {
      const user = await createUser(req.body);
      res.status(201).json({
        message: 'User registered successfully',
        user: {
          id: user.id,
          username: user.username,
          email: user.email,
          firstname: user.firstname,
          lastname: user.lastname,
          course: user.course,
          role: user.role,
          isVerified: user.isVerified,
        }
      });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Registration failed' });
    }
  };
  
module.exports = { registerUser };
