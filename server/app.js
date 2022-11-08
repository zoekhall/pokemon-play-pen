const path = require('path');
const express = require('express');
const session = require('express-session');
const passport = require('passport');
const { User } = require('./routes/userRoutes.js');
const { Deck } = require('./routes/deckRoutes.js');
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
app.use('/home', isLoggedIn, express.static(path.join(__dirname, '../client/dist')));


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

app.get('/home', isLoggedIn, (req, res) => {
 
});

app.get('/auth/failure', (req, res) => {
  res.send('Something went wrong');
});



app.get('/logout', function (req, res) {
  res.redirect('http://localhost:8080/');
});
app.get('/api', (req, res)=>{
  console.log('hit');
  res.sendStatus(200);

});
app.use('/api/user', User);

app.use('/api/deck', Deck);

module.exports = {
  app,
};
