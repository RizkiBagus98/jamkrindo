const express = require('express');
const router = express.Router();
const {kirimPesan, getAllPesan} = require('../controllers/pesanController');

router.post('/', kirimPesan);
router.get('/', getAllPesan);

module.exports = router;
