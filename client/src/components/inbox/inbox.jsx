// needed React things
import React from 'react';


// Components
import Compose from './compose.jsx';
import Layout from './layout.jsx';

import axios from 'axios';



const Inbox = () => {


  //function to get current user !!!!!!!!may not need
  const getCurUser = ()=>{
    axios.get('/api/current/user');
  };

  // func to search for users to message

  // func to send message

  // func to find logged in users sent msgs

  // func to find logged in users receive msgs

  return (
    <div>
      <button onClick={()=>getCurUser()}>test</button>
    </div>
  );
};

export default Inbox;
