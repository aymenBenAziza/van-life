import React from 'react';
import { NavLink } from 'react-router-dom';
import './header.css';

const Header = () => {
  const activeStyles = {
    fontWeight: 'bold',
    textDecoration: 'underline',
    color: '#161616',
  };

  return (
    <header>
      <nav className="navbar navbar-expand-lg nav-container shadow-sm">
        <div className="container-fluid">
          <NavLink to="." className="navbar-brand" style={{ fontSize: '24px', fontWeight: 'bold' }}>
            VAN-LIFE
          </NavLink>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavDropdown"
            aria-controls="navbarNavDropdown"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse justify-content-end" id="navbarNavDropdown">
            <ul className="navbar-nav">
              <li className="nav-item">
                <NavLink to="host" className="nav-link" style={({isActive}) => isActive ? activeStyles : null}>
                  Host
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="about" className="nav-link" style={({isActive}) => isActive ? activeStyles : null}>
                  About
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="vans" className="nav-link" style={({isActive}) => isActive ? activeStyles : null}>
                  Vans
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
