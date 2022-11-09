// needed React things
import React, { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import { BrowserRouter } from 'react-router-dom';

// Components
import Layout from './Layout.jsx';
import Search from './Components/Search.jsx';
import Inbox from './Components/Inbox.jsx';
import Sent from './Components/Sent.jsx';

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
