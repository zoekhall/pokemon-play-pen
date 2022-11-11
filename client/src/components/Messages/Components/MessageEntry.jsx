import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const MessageEntry = ({msg}) =>{

  const [user, setUser] = useState([]);

  useEffect(()=>{
    axios.get('/api/user/findUserId' + msg.sender)
      .then(data=> setUser(data.data))
      .catch(err => console.log(err));
  }, []);

  return (
    <div>
      <p>{user.username}</p>
      <img src={user.avatar} alt={user.name} referrerpolicy="no-referrer" width='50'/>
      <p>{msg.message}</p>
      <Link to={'/compose:' + msg.sender } >
        <button>Reply</button>
      </Link>
    </div>
  );
};
export default MessageEntry;
