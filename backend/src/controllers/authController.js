const User = require('../models/User');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

exports.register = async (req, res) => {
    try {
        const {name, email, password} = req.body;

        const existingUser = await User.findOne({email});
        if (existingUser) return res.status(400).json({message: 'Email sudah terdaftar'});

        const hashedPassword = await bcrypt.hash(password, 10);
        const newUser = new User({name, email, password: hashedPassword});

        await newUser.save();
        res.status(201).json({message: 'Registrasi berhasil'});
    } catch (err) {
        res.status(500).json({message: 'Terjadi kesalahan pada server', error: err.message});
    }
};

exports.login = async (req, res) => {
    try {
        const {email, password} = req.body;

        const user = await User.findOne({email});
        if (!user) return res.status(401).json({message: "Email atau password salah"}); // Use 401 for security

        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) return res.status(401).json({message: "Email atau password salah"}); // Use 401 for security

        // Create the JWT token
        const token = jwt.sign(
            {id: user._id, name: user.name},
            process.env.JWT_SECRET,
            {expiresIn: '7h'}
        );

        // 🔒 Set the token in a secure, HttpOnly cookie
        res.cookie('session-token', token, {
            httpOnly: true, // Prevents client-side JS from accessing the cookie
            secure: process.env.NODE_ENV === 'production', // Only send over HTTPS in production
            maxAge: 25200000, // 7 hours in milliseconds
            path: '/', // The cookie is available for all pages
        });

        // Send a success response without the token in the body
        res.status(200).json({
            message: 'Login berhasil',
            user: {id: user._id, name: user.name, email: user.email}
        });

    } catch (err) {
        res.status(500).json({message: 'Terjadi kesalahan pada server', error: err.message});
    }
};

// Optional but recommended: Add a logout route
exports.logout = (req, res) => {
    // Clear the cookie by setting its expiration date to a past time
    res.cookie('session-token', '', {
        httpOnly: true,
        expires: new Date(0),
        path: '/',
    });
    res.status(200).json({message: 'Logout berhasil'});
};