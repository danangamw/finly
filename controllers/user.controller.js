const { body, validationResult } = require('express-validator');
const User = require('../lib/models/user.model');
const bcrypt = require('bcrypt');

const validateSignup = [
  body('email', 'Email must not be empty').notEmpty(),
  body('password', 'Password must not be empty').notEmpty(),
  body('password', 'Password must be 6+ characters long').isLength({ min: 6 }),
  body('repeatPassword', 'Repeat Password must not be empty').notEmpty(),
  body('repeatPassword', 'Passwords do not match').custom(
    (value, { req }) => value === req.body.password,
  ),
];

const validateLogin = [
  body('email', 'Email must not be empty').notEmpty(),
  body('password', 'Password must not be empty').notEmpty(),
];

const signup = async (req, res) => {
  const validationErrors = validationResult(req);
  if (!validationErrors.isEmpty()) {
    const errors = validationErrors.array();
    req.flash('errors', errors);
    req.flash('data', req.body);
    return res.redirect('signup');
  }

  const { email, password } = req.body;
  const query = { email };

  const existingUser = await User.findOne(query);
  if (existingUser) {
    // Email already exists
    req.flash('data', req.body);
    req.flash('info', {
      message: 'Email is already registered. Try to login instead',
      type: 'error',
    });
    return res.redirect('/signup');
  }

  const hashedPassword = await bcrypt.hash(password, 10);
  const user = {
    email,
    password: hashedPassword,
  };

  const result = await User.create(user);
  req.session.userId = result._id;
  req.flash('info', {
    message: 'Signup success',
    type: 'success',
  });

  res.redirect('/dashboard');
};

const login = async (req, res) => {
  const validationErrors = validationResult(req);
  if (!validationErrors.isEmpty()) {
    const errors = validationErrors.array();
    req.flash('errors', errors);
    req.flash('data', req.body);
    return res.redirect('/login');
  }

  const { email, password } = req.body;
  const user = await User.findOne({ email });
  if (!user) {
    req.flash('info', {
      message: 'Email is not registered',
      type: 'error',
    });
    req.flash('data', req.body);
    return res.redirect('/login');
  }

  const passwordMatch = await bcrypt.compare(password, user.password);
  if (!passwordMatch) {
    req.flash('info', {
      message: 'Wrong Password',
      type: 'error',
    });
    req.flash('data', req.body);
    return res.redirect('/login');
  }

  req.session.userId = user._id;
  req.flash('info', {
    message: 'Login Successful',
    type: 'success',
  });
  res.redirect('/dashboard');
};

const logout = (req, res) => {
  req.session.userId = null;
  req.flash('info', {
    message: 'Logout Successful',
    type: 'success',
  });
  res.redirect('/');
};

module.exports = {
  signup,
  login,
  logout,
  validateSignup,
  validateLogin,
};
