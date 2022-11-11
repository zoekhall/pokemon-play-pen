import React, { useEffect, useState } from 'react';
import MessageList from './MessageList.jsx';
import axios from 'axios';
import Search from './Search.jsx';

const Inbox = () => {

  const [msg, setMsg] = useState([]);

  const getInbox = () =>{
    axios.get('/api/chat')
      .then(data => setMsg(data.data))
      .catch(err => console.log(err));
  };

  useEffect(getInbox, []);

  return (
    <div>
      <h1>Inbox</h1>
      <Search/>
      <MessageList msg={msg}/>
    </div>
  );
};

export default Inbox;
