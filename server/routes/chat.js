const { addMessage } = require('../db/dbHelperFuncs.js');

const { Router } = require('express');
const Chat = Router();


Chat.post('/', (req, res)=>{
  console.log(test);
});


module.exports = {Chat};
