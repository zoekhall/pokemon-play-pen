const path = require('path');
const express = require('express');
const session = require('express-session');
const passport = require('passport');
const { CurrentUser } = require('./routes/userRoutes.js');
const CLIENT_PATH = path.resolve(__dirname, '../client/dist');

const app = express();

app.use(session({
  secret: 'Our little secret.',
  resave: false,
  saveUninitialized: false
}));

app.use(passport.initialize());
app.use(passport.session());

const isLoggedIn = (req, res, next) => {
  req.user ? next() : res.redirect('/');
};

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use('/login', express.static(path.join(__dirname, '../client/dist/login')));
app.use('/home', isLoggedIn, express.static(path.join(CLIENT_PATH)));


app.get('/', (req, res) => {
  res.redirect('/login');
});

app.get('/auth/google',
  passport.authenticate('google', { scope: ['profile', 'email'] })
);

app.get('/auth/google/callback',
  passport.authenticate('google', {
    successRedirect: '/home',
    failureRedirect: '/',
  })
);

app.get('/home', isLoggedIn, (req, res) => {});

app.use('/api/current/user', CurrentUser);

module.exports = {
  app,
};
