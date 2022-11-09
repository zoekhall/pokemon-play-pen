import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Profile from './components/userProfiles/profile.jsx';
import Collection from './components/cardCollection/collection.jsx';
import MarketPlace from './components/marketPlace/marketPlace.jsx';
import Pokedex from './components/pokedex/pokedex.jsx';
import Messages from './components/Messages/Messages.jsx';
import Layout from './Layout.jsx';
import NoPage from './NoPage.jsx';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Profile />} />
          <Route path="messages" element={<Messages/>} />
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
