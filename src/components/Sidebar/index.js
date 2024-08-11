import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import './index.css'; 

const Sidebar = () => {
  const location = useLocation(); 

  return (
    <div className="sidebar">
      <nav className="sidebar-nav">
        <ul className="sidebar-menu">
          <li className="sidebar-item">
            <Link
              to="/"
              className={`sidebar-link ${location.pathname === '/' ? 'active' : ''}`}
            >
              Home
            </Link>
          </li>
          <li className="sidebar-item">
            <Link
              to="/posts"
              className={`sidebar-link ${location.pathname === '/posts' ? 'active' : ''}`}
            >
              Posts
            </Link>
          </li>
          <li className="sidebar-item">
            <Link
              to="/users"
              className={`sidebar-link ${location.pathname === '/users' ? 'active' : ''}`}
            >
              Users
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;
