const express = require('express');
const router = express.Router();

const { 
    getSambutan, 
    updateSambutan 
} = require('../controllers/sambutanController');

router.get('/', getSambutan);
router.post('/', updateSambutan);

module.exports = router;