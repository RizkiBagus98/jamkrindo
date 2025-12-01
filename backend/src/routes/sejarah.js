// src/routes/sejarah.js
const express = require('express');
const router = express.Router();

const {
    getSejarah,
    updateSejarah
} = require('../controllers/sambutanController'); // Pastikan path ini benar

// GET /api/sejarah/
router.get('/', getSejarah);

// POST /api/sejarah/
router.post('/', updateSejarah);

module.exports = router;