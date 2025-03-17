const express = require('express');
const router = express.Router();
const {
  signup,
  login,
  logout,
  validateLogin,
  validateSignup,
} = require('../controllers/user.controller');
const { redirectedAuthenticated } = require('../lib/middleware');

router.get('/', redirectedAuthenticated, (req, res) => {
  res.render('pages/index', {
    title: 'Finly',
    info: req.flash('info')[0],
  });
});

router.get('/login', redirectedAuthenticated, (req, res) => {
  res.render('pages/login', {
    title: 'Sign in',
    user: req.flash('data')[0],
    info: req.flash('info')[0],
    errors: req.flash('errors'),
  });
});

router.get('/signup', redirectedAuthenticated, (req, res) => {
  res.render('pages/signup', {
    title: 'Sign up',
    user: req.flash('data')[0],
    info: req.flash('info')[0],
    errors: req.flash('errors'),
  });
});

router.post('/signup', validateSignup, signup);
router.post('/login', validateLogin, login);
router.get('/logout', logout);

module.exports = router;
