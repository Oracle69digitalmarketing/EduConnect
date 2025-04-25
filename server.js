const express = require('express');
const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const cors = require('cors');
require('dotenv').config();

const app = express();
app.use(express.json());
app.use(cors());

// MongoDB connection
mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true });

// User Model
const User = mongoose.model('User', new mongoose.Schema({
  email: { type: String, required: true, unique: true },
  username: { type: String, required: true },
  password: { type: String, required: true }
}));

// Register Endpoint
app.post('/signup', async (req, res) => {
  const { email, username, password } = req.body;

  const hashedPassword = await bcrypt.hash(password, 10);
  const newUser = new User({ email, username, password: hashedPassword });

  try {
    await newUser.save();
    res.status(201).send('User created successfully');
  } catch (error) {
    res.status(400).send('Error creating user');
  }
});

// Login Endpoint
app.post('/login', async (req, res) => {
  const { username, password } = req.body;

  const user = await User.findOne({ username });
  if (!user) return res.status(400).send('User not found');

  const isMatch = await bcrypt.compare(password, user.password);
  if (!isMatch) return res.status(400).send('Invalid credentials');

  const token =
