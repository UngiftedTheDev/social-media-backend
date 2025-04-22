const Joi = require('joi');

const registerSchema = Joi.object({
  username: Joi.string().alphanum().min(3).max(30).required(),
  firstname: Joi.string().min(2).required(),
  lastname: Joi.string().min(2).required(),
  email: Joi.string().email().required(),
  password: Joi.string().min(6).required(),
  course: Joi.string().optional(),
});

module.exports = { registerSchema };
