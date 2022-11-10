import React, { useEffect, useState} from 'react';
import axios from 'axios';
import ChatList from './ChatList.jsx';

const MessageList = () => {

  const [msg, setMsg] = useState([]);
  const [senders, setSenders] = useState({});
  const [users, setUsers] = useState([]);

  const getInbox = () =>{
    axios.get('/api/chat')
      .then(data => {
        setMsg(data.data);
        return data.data;
      })
      .then((messages) => {
        return organizeMsgs(messages);
      })
      .then(data=> userLookUp(data))
      .catch(err => console.log(err));
  };

  const organizeMsgs = (messages) =>{
    const uniMsgs = messages.reduce((a, c)=>{
      if (!a[c.sender]) {
        a[c.sender] = c;
      }
      return a;
    }, {});
    setSenders(uniMsgs);
    return uniMsgs;
  };

  const userLookUp = (userObj) =>{
    const userId = Object.keys(userObj);
    userId.forEach(userId=>{
      axios.get('/api/user/findUserId' + userId)
        .then(data=> console.log(data.data))
        .catch(err => console.log(err));
    });

  };

  useEffect(getInbox, []);

  return (
    <div>
      {users.map(user=> (
        <ChatList
          user={user}
          key={user._id}
        />
      )
      )}
    </div>
  );
};

export default MessageList;
