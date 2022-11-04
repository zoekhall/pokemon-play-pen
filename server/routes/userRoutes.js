const db = require('mongoose');
const { obtainAllUsers } = require('../db/index.js');
const { Router } = require('express');
const User = Router();

//retrieve all user data from schema
User.get('/', (req, res) => {
  res.status(200).send(obtainAllUsers());
});

//post data to user schema to add a user


// retrieve a user by its id 

module.exports = { User };
