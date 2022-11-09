import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Profile from './components/userProfiles/profile.jsx';
import Collection from './components/cardCollection/collection.jsx';
import MarketPlace from './components/marketPlace/marketPlace.jsx';
import Pokedex from './components/pokedex/Pokedex.jsx';
import Layout from './Layout.jsx';
import NoPage from './NoPage.jsx';

import Inbox from './components/Messages/Components/Inbox.jsx';
import Search from './components/Messages/Components/Search.jsx';
import Sent from './components/Messages/Components/Sent.jsx';
import Compose from './components/Messages/Compose.jsx';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Profile />} />
          <Route path="messages" element={<Inbox/>} />
          <Route path='messages/inbox' element={< Inbox/>} />
          <Route path='messages/search' element={< Search/>} />
          <Route path='messages/sent' element={< Sent/>} />
          <Route path='/compose' element={<Compose/>}/>
          <Route path="marketPlace" element={<MarketPlace />} />
          <Route path="pokedex" element={<Pokedex />} />
          <Route path="collection" element={<Collection />} />
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
