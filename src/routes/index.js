// src/routes/index.js
const express = require('express');
const router = express.Router();
const path = require('path');

// Serve the filmography.html static file
router.get('/filmography', (req, res) => {
  res.sendFile(path.resolve(__dirname, '../../public/filmography.html')); // Two levels up to access 'public'
});

module.exports = router;
