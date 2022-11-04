const path = require('path');
const express = require('express');


const CLIENT_PATH = path.resolve(__dirname, '../client/dist');
const app = express();

app.use(express.urlencoded({extended: true}));
app.use(express.json());

app.use(express.static(CLIENT_PATH));




module.exports = {
  app,
};
