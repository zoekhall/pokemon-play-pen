import React from 'react';
import { Outlet, Link } from 'react-router-dom';

const Layout = () => {
  return (
    <>
      <nav>
        <ul>
          <li>
            <Link to="/messages">Inbox</Link>
          </li>
          <li>
            <Link to="/messages:search">Search</Link>
          </li>
          <li>
            <Link to="/messages:sent">Sent</Link>
          </li>
        </ul>
      </nav>

      <Outlet />
    </>
  );
};

export default Layout;
