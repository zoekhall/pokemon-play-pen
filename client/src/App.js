import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Profile from './components/userProfiles/profile.js';
import Collection from './components/cardCollection/collection.js';
import MarketPlace from './components/marketPlace/marketPlace.js';
import Pokedex from './components/pokedex/Pokedex.js';
import Inbox from './components/inbox/inbox.js';
import Layout from './Layout.js';
import NoPage from './NoPage.js';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path='/'
          element={<Layout />}>
          <Route
            index
            element={<Profile />}
          />
          <Route
            path='inbox'
            element={<Inbox />}
          />
          <Route
            path='marketPlace'
            element={<MarketPlace />}
          />
          <Route
            path='pokedex'
            element={<Pokedex />}
          />
          <Route
            path='collection'
            element={<Collection />}
          />
          <Route
            path='*'
            element={<NoPage />}
          />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
