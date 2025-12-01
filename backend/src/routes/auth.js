const express = require('express');
const {login, register, logout, checkAuthStatus} = require('../controllers/authController')
const router = express.Router();
const authMiddleware = require('../middlewares/authMiddleware');

router.post('/register', register);
router.post('/login', login);
router.get('/me', authMiddleware, (req, res) => {
    res.status(200).json(req.user); // req.user diisi oleh authMiddleware
});
router.post('/logout', logout);
router.get('/status', checkAuthStatus);

module.exports = router;
