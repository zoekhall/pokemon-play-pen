import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';

import Profile from './components/userProfiles/profile.jsx';
import Collection from './components/cardCollection/collection.jsx';
import MarketPlace from './components/marketPlace/marketPlace.jsx';
import Pokedex from './components/pokedex/Pokedex.jsx';
import Layout from './Layout.jsx';
import NonUserProf from './components/userProfiles/nonUserProf.jsx';
import Inbox from './components/Messages/Components/Inbox.jsx';
import Search from './components/Messages/Components/Search.jsx';
import Compose from './components/Messages/Compose.jsx';


// 
const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Profile />} />
          <Route path='inbox' element={< Inbox/>} />
          <Route path='compose:id' element={<Compose/>}/>
          <Route path="marketPlace" element={<MarketPlace />} />
          <Route path="pokedex" element={<Pokedex />} />
          <Route path="collection" element={<Collection />} />
          <Route path="userProfile:id" element={ <NonUserProf /> } />
          <Route path='*' element={<Navigate to='/' replace />}/>
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
