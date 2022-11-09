const db = require('mongoose');
const { obtainAllUsers, createUser, findUser, findUserById, changeUsername } = require('../db/dbHelperFuncs.js');
const { Router } = require('express');
const User = Router();

//retrieve all user data from schema
User.get('/current', (req, res) => { // get the currently logged in user
  //console.log(req);
  res.status(200).send(req.user); // sends the google auth object from passport
});

User.get('/find', (req, res)=>{
  const user = req.query.name;
  findUser(user, (returnedUsers)=>{
    if (returnedUsers.length) {
      res.status(200).send(returnedUsers);
    } else {
      res.sendStatus(500);
    }
  });
});

User.get('/:id', (req, res) => { // get the user at the specified id
  //console.log(req);
  res.status(200).send(findUserById(req.params.id)); // sends an object of the user id => { id: 12345678900000 }
});

User.patch('/name', (req, res) => {
  console.log(req.user);
  changeUsername(req.user._id);
  res.status(201).send('name changed');
});



//post data to user schema to add a user
User.post('/', (req, res) => { // adds a user to the database useing the google auth object (i would hope)
  //createUser()
  //console.log(req);
  res.status(201).send();
});

// retrieve a user by its id

module.exports = { User };
