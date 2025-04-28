const { createUser } = require('../services/user.service');
const { CREATED, INTERNAL_SERVER_ERROR } = require('../constants/statusCodes'); 
const pick = require('../utils/pick');

const registerUser = async (req, res) => {
  const allowedFields = ["username", "firstname", "lastname", "email", "password", "course"];
  const safeUserData = pick(req.body, allowedFields);

  try {
    const user = await createUser(safeUserData); 
    res.status(CREATED).json({
      message: 'User registered successfully',
      data: user
    });
  } catch (error) {
    console.error(error);
    res.status(INTERNAL_SERVER_ERROR).json({ error: 'Registration failed' }); 
  }
};

module.exports = { registerUser };
