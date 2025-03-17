const express = require('express');
const router = express.Router();

const customerRouter = require('./customer.route');
const invoiceRouter = require('./invoice.route');
const { showDashboard } = require('../controllers/dashboard.controller');

router.get('/', showDashboard);

router.use('/customers', customerRouter);
router.use('/invoices', invoiceRouter);

module.exports = router;
