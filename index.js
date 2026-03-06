// index.js - Login System with Express, MongoDB, Sessions, and User Class

const express = require('express');
const mongoose = require('mongoose');
const session = require('express-session');
const User = require('./User');

const app = express();

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Session configuration
app.use(session({
  secret: 'my-secret-key-12345',
  resave: false,
  saveUninitialized: false,
  cookie: { maxAge: 3600000 } // 1 hour
}));

// MongoDB connection string - MongoDB Atlas Cloud Database
const MONGO_URI = 'mongodb+srv://i220743_db_user:rYNFd6tgtle7GJGQ@cluster0.1wtaskl.mongodb.net/studentDB';

// Connect to MongoDB
mongoose.connect(MONGO_URI)
  .then(() => console.log('✅ MongoDB Connected to studentDB!'))
  .catch(err => console.error('❌ MongoDB Connection Error:', err));

// Authentication Middleware - Protects routes
function isAuthenticated(req, res, next) {
  if (req.session.user) {
    next(); // User is logged in, proceed
  } else {
    res.status(401).json({ message: 'Unauthorized. Please login first.' });
  }
}

// ROUTES

// Home route
app.get('/', (req, res) => {
  res.send('Welcome to Login System! Use /register, /login, /dashboard, /logout');
});

// Register Route - POST /register
app.post('/register', async (req, res) => {
  const { username, password } = req.body;

  if (!username || !password) {
    return res.status(400).json({ message: 'Username and password are required' });
  }

  const user = new User(username, password);
  const result = await user.register();

  if (result.success) {
    res.status(201).json({ message: result.message });
  } else {
    res.status(400).json({ message: result.message });
  }
});

// Login Route - POST /login
app.post('/login', async (req, res) => {
  const { username, password } = req.body;

  if (!username || !password) {
    return res.status(400).json({ message: 'Username and password are required' });
  }

  const user = new User(username, password);
  const result = await user.login();

  if (result.success) {
    // Create session
    req.session.user = username;
    res.json({ message: result.message });
  } else {
    res.status(401).json({ message: result.message });
  }
});

// Dashboard Route - GET /dashboard (Protected)
app.get('/dashboard', isAuthenticated, (req, res) => {
  res.json({ message: `Welcome ${req.session.user}` });
});

// Logout Route - GET /logout
app.get('/logout', (req, res) => {
  req.session.destroy((err) => {
    if (err) {
      return res.status(500).json({ message: 'Logout failed' });
    }
    res.json({ message: 'Logout successful' });
  });
});

// Start server
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});
