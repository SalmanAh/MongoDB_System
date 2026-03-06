// User.js - User Class with register and login methods

const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

// Define User Schema
const userSchema = new mongoose.Schema({
  username: { type: String, required: true, unique: true },
  password: { type: String, required: true }
});

// Create User Model
const UserModel = mongoose.model('User', userSchema);

// User Class
class User {
  constructor(username, password) {
    this.username = username;
    this.password = password;
  }

  // Register new user
  async register() {
    try {
      // Check if user already exists
      const existingUser = await UserModel.findOne({ username: this.username });
      if (existingUser) {
        return { success: false, message: 'Username already exists' };
      }

      // Hash password for security
      const hashedPassword = await bcrypt.hash(this.password, 10);

      // Save user to database
      const newUser = new UserModel({
        username: this.username,
        password: hashedPassword
      });

      await newUser.save();
      return { success: true, message: 'User registered successfully' };
    } catch (error) {
      return { success: false, message: error.message };
    }
  }

  // Login user
  async login() {
    try {
      // Find user in database
      const user = await UserModel.findOne({ username: this.username });
      if (!user) {
        return { success: false, message: 'User not found' };
      }

      // Compare password
      const isPasswordValid = await bcrypt.compare(this.password, user.password);
      if (!isPasswordValid) {
        return { success: false, message: 'Invalid password' };
      }

      return { success: true, message: 'Login successful' };
    } catch (error) {
      return { success: false, message: error.message };
    }
  }
}

module.exports = User;
