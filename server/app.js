const path = require('path');
const express = require('express');

const { User } = require('./routes/userRoutes.js');
const CLIENT_PATH = path.resolve(__dirname, '../client/dist');
const app = express();

app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.use(express.static(CLIENT_PATH));

app.use('/api/user', User);



module.exports = {
  app,
};
