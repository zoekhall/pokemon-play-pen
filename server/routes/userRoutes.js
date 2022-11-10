const db = require('mongoose');
const { obtainAllUsers, createUser, findUser, findUserById, changeUsername, changeDescription } = require('../db/dbHelperFuncs.js');
const { Router } = require('express');
// const { pokeData } = require('../exampleDATA&endpoints/examplePokemon.JSON');
const User = Router();

//retrieve all user data from schema
User.get('/current', (req, res) => { // get the currently logged in user
  //console.log(req);
  //console.log(pokeData.abilities);
  res.status(200).send(req.user); // sends the google auth object from passport
});

User.get('/find', (req, res)=>{
  const user = req.query.name;
  findUser(user, (returnedUsers)=>{
    if (returnedUsers) {
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

User.get('/pokemon', (req, res) => {
  res.status(200).send({ species: pokeData.species, sprite: pokeData.sprites.other['official-artwork'] });
});

User.patch('/name', (req, res) => { // change the username of the logged in user with the inputted username
  changeUsername(req.user._id, req.body.name);
  res.status(201).send('name changed');
});

User.patch('/description', (req, res) => { // change the description of the logged in user with the inputted new description
  changeDescription(req.user._id, req.body.data);
  res.status(201).send('desc changed');
});



//post data to user schema to add a user
User.post('/', (req, res) => { // adds a user to the database using the google auth object (i would hope)
  //createUser()
  //console.log(req);
  res.status(201).send();
});

// retrieve a user by its id

module.exports = { User };
