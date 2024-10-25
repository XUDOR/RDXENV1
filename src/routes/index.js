// src/routes/index.js
const express = require('express');
const router = express.Router();
const path = require('path');

router.get('/filmography', (req, res) => {
    res.sendFile(path.join(__dirname, '../../public/filmography.html'));
});

module.exports = router;