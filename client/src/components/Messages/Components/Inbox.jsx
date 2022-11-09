import React, { useEffect, useState } from 'react';
import MessageList from './MessageList.jsx';
import axios from 'axios';

const Inbox = () => {

  const [msg, setMsg] = useState([]);

  const getInbox = () =>{
    axios.get('/api/chat/to')
      .then(data => setMsg(data))
      .catch(err => console.log(err));
  };

  useEffect(getInbox, []);

  return (
    <div>
      <h1>Inbox</h1>
      <MessageList msg={msg}/>
    </div>
  );
};

export default Inbox;
