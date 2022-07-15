const router = require('express').Router();
const { createTransaction } = require('../controllers/TransactionController');

router.post('/', createTransaction)

module.exports.transactionRouter = router;