const express = require('express');
const session = require('express-session');
const morgan = require('morgan');
const flash = require('connect-flash');
const { verifyUser } = require('./lib/middleware');

require('dotenv').config();
require('./lib/dbConnect');

const app = express();

app.set('views', './views');
app.set('view engine', 'ejs');

app.use(morgan('dev'));
app.use(express.static('./public'));
app.use(express.urlencoded({ extended: false }));
app.use(
  session({
    secret: process.env.AUTH_SECRET,
    saveUninitialized: true,
    resave: false,
  }),
);
app.use(flash());

app.use('/', require('./routes/user.routes'));
app.use('/dashboard', verifyUser, require('./routes/dashboard.routes'));
app.get('*', (req, res) => {
  res.status(404).render('index', { title: 'Not Found', message: 'Not Found' });
});

const PORT = 3000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
