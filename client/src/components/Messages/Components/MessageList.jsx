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
    const userObjs = [];
    userId.forEach(userId=>{
      axios.get('/api/user/findUserId' + userId)
        .then(data=> userObjs.push(data.data))
        .catch(err => console.log(err));
    });
    setUsers(userObjs);
  };

  useEffect(getInbox, []);

  return (
    <div>
      <ChatList users={users}/>
    </div>
  );
};

export default MessageList;
