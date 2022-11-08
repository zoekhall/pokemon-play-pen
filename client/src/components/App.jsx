import React, { useState } from 'react';
import { BrowserRouter, Switch, Routes, Route, Link } from 'react-router';
import Profile from './userProfiles/profile.jsx';
import Collection from './cardCollection/collection.jsx';
import MarketPlace from './marketPlace/marketPlace.jsx';
import Pokedex from './pokedex/pokedex.jsx';
import Inbox from './inbox/inbox.jsx';


const App = () => {

  const [view, setView] = useState('profile'); //create a view state

  const changeView = (newView) => setView(newView); //create a method that changes state views on click

  const renderView = () => { //create a method that renders different state views -- pokedex, marketPlace, inbox, cardCollection, profile
    if (view === 'marketPlace') { //if the state is equal to this string - then return the corresponding component
      return <MarketPlace />;
    } else if (view === 'collection') {
      return <Collection />;
    } else if (view === 'pokedex') {
      return <Pokedex />;
    } else if (view === 'inbox') {
      return <Inbox />;
    } else {
      return <Profile />;
    }
  };

  return (
    <div>
      <div>
        <span
          className={view === 'profile' ? 'selected' : 'unselected'} //assign class name based on view state
          onClick={() => changeView('profile')} //set the state to this section
        > Profile </span>
        <span
          className={view === 'collection' ? 'selected' : 'unselected'} //assign class name based on view state
          onClick={() => changeView('collection')} //set the state to this section
        > Collection </span>
        <span
          className={view === 'inbox' ? 'selected' : 'unselected'} //assign class name based on view state
          onClick={() => changeView('inbox')} //set the state to this section
        > Inbox </span>
        <span
          className={view === 'marketPlace' ? 'selected' : 'unselected'} //assign class name based on view state
          onClick={() => changeView('marketPlace')} //set the state to this section
        > Market Place </span>
        <span
          className={view === 'pokedex' ? 'selected' : 'unselected'} //assign class name based on view state
          onClick={() => changeView('pokedex')} //set the state to this section
        > Pokedex </span>
      </div>
      <div className='currentView'>{renderView()}</div>
    </div>
  );
};

export default App;
