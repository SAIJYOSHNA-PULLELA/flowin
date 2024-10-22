const express = require('express');
const router = express.Router();
const transactionController = require('../controllers/transactionController');

router.post('/transactions', transactionController.addTransaction);
router.get('/transactions', transactionController.getTransactions);

module.exports = router;
