// needed React things
import React, { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import { BrowserRouter } from 'react-router-dom';

// Components
import Layout from './Layout.js';
import Search from './Components/Search.js';
import Inbox from './Components/Inbox.js';
import Sent from './Components/Sent.js';

const Messages = () => {




  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={< Search/>} />
        <Route path=':search' element={< Search/>} />
        <Route path=':sent' element={< Sent/>} />
        <Route path=':*' element={<Search/>}/>
      </Route>
    </Routes>
  );
};

export default Messages;
