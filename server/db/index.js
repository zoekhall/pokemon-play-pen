const mongoose = require('mongoose');
const { Schema, model } = mongoose;
const passportLocalMongoose = require('passport-local-mongoose');
const findOrCreate = require('mongoose-findorcreate');
const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
require('dotenv').config();

const session = require('express-session');


const mongoUri = 'mongodb://localhost/poke';


mongoose.connect(mongoUri)
  .then(() => console.log('connected to mongodb'))
  .catch(err => console.log('you did not connect to mongodb'));



const userSchema = new Schema({
  username: {
    type: String,
    require: true,
    unique: true
  },
  password: {
    type: String,
    require: true,
  },
  googleId: String,
  secret: String,
  deckId: String,
  favPokemon: String,
});
userSchema.plugin(passportLocalMongoose);
userSchema.plugin(findOrCreate);


const chatSchema = new Schema({
  receiver: {
    type: String,
    require: true,
  },
  sender: {
    type: String,
    require: true
  },
  message: String,
  date: String
});

const deckSchema = new Schema({
  cardId: String,
  userId: String
});

passport.use(new GoogleStrategy({
  clientID: process.env.GOOGLE_CLIENT_ID,
  clientSecret: process.env.GOOGLE_CLIENT_SECRET,
  callbackURL: 'http://localhost:8080/auth/google/callback',
},
function (accessToken, refreshToken, profile, cb) {
  User.findOrCreate({ googleId: profile.id }, function (err, user) {
    return cb(err, user);
  });
}
));
const deckModel = mongoose.model('Deck', deckSchema);
const User = mongoose.model('User', userSchema);
const chatModel = mongoose.model('Chat', chatSchema);
passport.use(User.createStrategy());


passport.serializeUser(function (user, done) {
  done(null, user.id);
});
passport.deserializeUser(function (id, done) {
  User.findById(id, function (err, user) {
    done(err, user);
  });
});



const obtainAllUsers = function () {
  userModel.find({});
};

const createUser = function (data) {
  userModel.create(data);
};

module.exports = {
  deckModel,
  User,
  chatModel,
  obtainAllUsers
};
