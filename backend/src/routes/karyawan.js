// routes/employeeRoutes.js

const express = require('express');
const router = express.Router();

const { 
    getAllEmployees,
    createEmployee, 
    updateEmployee, 
    deleteEmployee 
} = require('../controllers/karyawanController');

router.get('/', getAllEmployees);
router.post('/', createEmployee);
router.put('/:id', updateEmployee);
router.delete('/:id', deleteEmployee);


module.exports = router;