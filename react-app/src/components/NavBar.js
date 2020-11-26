import React from 'react';
import { NavLink } from 'react-router-dom';
import LogoutButton from './auth/LogoutButton';

const NavBar = ({ setAuthenticated }) => {
  return (
    <nav className="navbar">
      <div className="navbar__contents">
        <NavLink to="/" exact={true} activeClassName="active">
          <div className="navbar__logo">
            <div className="navbar__logo-image"></div>
            <div className="navbar__logo-title">Busker</div>
          </div>
        </NavLink>
        <ul className="navbar__links">
          <li>
            <NavLink to="/login" exact={true} activeClassName="active">
              Login
            </NavLink>
          </li>
          <li>
            <NavLink to="/sign-up" exact={true} activeClassName="active">
              Sign Up
            </NavLink>
          </li>
          <li>
            {/* route needs user Id */}
            <NavLink to={`/artists/`} exact={true} activeClassName="active">
              Artists
            </NavLink>
          </li>
          <li>
            {/* route needs user Id */}
            <NavLink to='/upload/' exact={true} activeClassName="active">
              Upload
            </NavLink>
          </li>
          <li>
            <LogoutButton setAuthenticated={setAuthenticated} />
          </li>
        </ul>
        <div className="navbar__search">
          <input type="text" placeholder="Search"></input>
        </div>
        <div className="navbar__menu">
          <div>menu</div>
          <div>items</div>
          <div>here</div>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
