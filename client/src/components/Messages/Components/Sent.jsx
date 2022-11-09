import React, { useEffect, useState } from 'react';
import MessageList from './MessageList.jsx';
import axios from 'axios';

const Sent = () => {

  const [msg, setMsg] = useState([]);

  const getInbox = () =>{
    axios.get('/api/chat/to')
      .then(data => setMsg(data))
      .catch(err => console.log(err));
  };

  useEffect(getInbox, []);

  return (
    <div>
      <h1>Sent</h1>
      <MessageList msg={msg}/>
    </div>
  );
};

export default Sent;
