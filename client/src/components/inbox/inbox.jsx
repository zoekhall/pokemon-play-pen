// needed React things
import React, { useState } from 'react';


// Components
import Compose from './compose.jsx';
import Msgs from './msgs.jsx';
import Sent from './sent.jsx';

import axios from 'axios';



const Inbox = () => {

  const [view, setView] = useState('inbox');

  const changeView = newView => setView(newView);

  const renderView = () => {
    if ( view === 'compose') {
      return <Compose/>;
    } else if ( view === 'sent' ) {
      return <Sent/>;
    } else if ( view === 'msgs') {
      return <Msgs/>;
    } else {
      return <Compose/>;
    }
  };




  //function to get current user !!!!!!!!may not need
  const getCurUser = ()=>{
    axios.get('/api/current/user');
  };

  

  // func to send message

  // func to find logged in users sent msgs

  // func to find logged in users receive msgs

  return (
    <div>
      <nav>
        <span
          className={view === 'compose' ? 'selected' : 'unselected'}
          onClick={() => changeView('compose')}
        >Compose</span>
        <span
          className={view === 'msgs' ? 'selected' : 'unselected'}
          onClick={() => changeView('msgs')}
        >Messages</span>
        <span
          className={view === 'sent' ? 'selected' : 'unselected'}
          onClick={() => changeView('sent')}
        >Sent</span>
      </nav>
      <div className='currentView'>{renderView()}</div>
    </div>
  );
};

export default Inbox;
