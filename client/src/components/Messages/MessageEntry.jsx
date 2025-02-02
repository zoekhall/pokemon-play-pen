import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const MessageEntry = ({ msg }) => {

  const [sender, setUser] = useState([]);
  const [loggedInUser, setLogged] = useState();

  useEffect(() => {
    axios.get('/api/user/findUserId' + msg.sender)
      .then((data)=> {
        const resArr = data.data.data;
        setUser(resArr[0]);
        return resArr[1];
      })
      .then(data => setLogged(data))
      .catch(err => console.log(err));
  }, []);

  return (
    <div>
      <p>From: {sender.username}</p>
      <Link to={`/userProfile:${msg.sender}`}>
        <img src={sender.avatar} alt={sender.name} referrerpolicy="no-referrer" width='50' />
      </Link>

      <p>{msg.message}</p>
      {loggedInUser !== Number(msg.sender) ?
        <Link to={'/compose:' + msg.sender} >
          <button>Reply</button>
        </Link> :
        <></>}

    </div>
  );
};
export default MessageEntry;
