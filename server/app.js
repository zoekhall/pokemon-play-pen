const path = require('path');
const express = require('express');
const session = require('express-session');
const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const clientID = '594164333356-4mh7nfte8udmjtlduk11vviq67ckmlip.apps.googleusercontent.com';
const clientSecret = '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';
const { User } = require('./routes/userRoutes.js');
const CLIENT_PATH = path.resolve(__dirname, '../client/dist');
const User1 = require('./index.js');


const app = express();
app.use(session({
  secret: 'Our little secret.',
  resave: false,
  saveUninitialized: false
}));
app.use(passport.initialize());
app.use(passport.session());



app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// app.use(express.static(CLIENT_PATH));



app.get('/', (req, res) => {
  res.send('<a href="/auth/google"> Authenticate with Google</a>');
});

app.get('/auth/google',
  passport.authenticate('google', { scope: ['profile', 'email'] })
);

app.get('/auth/google/callback',
  passport.authenticate('google', {
    successRedirect: '/protected',
    failureRedirect: '/auth/failure',
  })
);

app.get('/protected', (req, res) => {
  res.send('Hello');
});

app.get('/auth/failure', (req, res) => {
  res.send('Something went wrong');
});
// app.get('/auth/google/callback',
//   passport.authenticate('google', { failureRedirect: 'http://localhost:8080' }),
//   function (req, res) {
//     res.redirect('http://localhost:8080');
//   });


app.get('/logout', function (req, res) {
  res.redirect('http://localhost:8080/');
});

app.use('/api/user', User);


module.exports = {
  app,
};
