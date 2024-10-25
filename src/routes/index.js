// src/routes/index.js
const express = require('express');
const router = express.Router();
const path = require('path');

router.get('/filmography', (req, res) => {
  res.redirect('/filmography.html'); // Redirect to the static file
});


module.exports = router;