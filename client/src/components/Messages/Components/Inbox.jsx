import React, { useEffect, useState } from 'react';
import MessageList from './MessageList.jsx';
import axios from 'axios';
import Search from './Search.jsx';

const Inbox = () => {

  return (
    <div>
      <h1>Inbox</h1>
      <Search/>
      <MessageList/>
    </div>
  );
};

export default Inbox;
