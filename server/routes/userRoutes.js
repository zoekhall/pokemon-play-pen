const db = require('mongoose');
const { obtainAllUsers, createUser } = require('../db/index.js');
const { Router } = require('express');
const User = Router();

//retrieve all user data from schema
User.get('/current', (req, res) => {
  //console.log(req);
  res.status(200).send(req.user);
});

//post data to user schema to add a user
User.post('/', (req, res) => {
  //createUser()
  //console.log(req);
  res.status(201).send();
});

// retrieve a user by its id

module.exports = { User };
