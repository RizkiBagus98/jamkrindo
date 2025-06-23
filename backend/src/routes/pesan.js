const express = require('express');
const router = express.Router();
const { kirimPesan } = require('../controllers/pesanController');

router.post('/', kirimPesan);

module.exports = router;
