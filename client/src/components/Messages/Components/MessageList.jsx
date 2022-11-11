import React, { useEffect, useState} from 'react';
import axios from 'axios';

import MessageEntry from './MessageEntry.jsx';

const MessageList = () => {


  const [msg, setMsg] = useState([]);


  const getInbox = () =>{
    axios.get('/api/chat')
      .then(data => setMsg(data.data))
      .catch(err => console.log(err));
  };


  useEffect(()=>{ getInbox(); }, []);


  return (
    <div>
      {msg.map(msg=>(
        <MessageEntry
          msg={msg}
          key={msg._id}
        />
      ))}
    </div>

  );
};
export default MessageList;
