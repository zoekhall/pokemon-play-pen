import React from 'react';
import { Outlet, Link } from 'react-router-dom';

const Layout = () => {
  return (
    <>
      <nav>
        <ul>
          <li>
            <Link to="/">Profile</Link>
          </li>
          <li>
            <Link to="/messages">Messages</Link>
          </li>
          <ol>
            <li><Link to={'messages/inbox'}>Inbox</Link></li>
            <li><Link to={'messages/search'}>Search</Link></li>
            <li><Link to={'messages/sent'}>Sent</Link></li>
          </ol>
          <li>
            <Link to="/marketPlace">Market Place</Link>
          </li>
          <li>
            <Link to="/pokedex">Poke-dex</Link>
          </li>
          <li>
            <Link to="/collection">Collection</Link>
          </li>
        </ul>
      </nav>

      <Outlet />
    </>
  );
};

export default Layout;
