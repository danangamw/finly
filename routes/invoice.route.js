const express = require('express');
const router = express.Router();

const {
  showInvoices,
  getCustomers,
  validateInvoice,
  createInvoice,
  editInvoice,
  deleteInvoice,
  updateInvoice,
} = require('../controllers/invoice.controller');

router.get('/', showInvoices);
router.get('/create', getCustomers, (req, res) => {
  const { customers } = req;
  res.render('pages/invoices', {
    title: 'Create Invoice',
    formAction: 'create',
    type: 'form',
    customers,
    invoice: req.flash('data')[0],
    errors: req.flash('errors'),
  });
});

router.get('/:id/edit', getCustomers, editInvoice);
router.post('/:id/edit', validateInvoice, updateInvoice);
router.post('/:id/delete', deleteInvoice);
router.post('/create', validateInvoice, createInvoice);

module.exports = router;
