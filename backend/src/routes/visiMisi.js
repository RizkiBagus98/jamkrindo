// src/routes/visiMisi.js
const express = require('express');
const router = express.Router();

const {
    getVisiMisi,
    updateVisiMisi
} = require('../controllers/sambutanController');

// GET /api/visimisi/
router.get('/', getVisiMisi);

// POST /api/visimisi/
router.post('/', updateVisiMisi);

module.exports = router;