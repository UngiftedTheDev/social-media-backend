const { PrismaClient } = require('@prisma/client');
const bcrypt = require('bcrypt');
const prisma = new PrismaClient();

const createUser = async (userData) => {
    const hashedPassword = await bcrypt.hash(userData.password, 10);
  
    return await prisma.user.create({
      data: {
        username: userData.username,
        firstname: userData.firstname,
        lastname: userData.lastname,
        email: userData.email,
        course: userData.course,
        role: userData.role || 'user',
        isVerified: false,
        password: hashedPassword,
      }
    });
  };
  

module.exports = { createUser };
