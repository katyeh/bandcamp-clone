import React from 'react';
import { NavLink } from 'react-router-dom';
import LogoutButton from './auth/LogoutButton';
import LoginModal from "./home/Home_LoginModal";
import NavSearch from './NavSearch';

const NavBar = ({ setAuthenticated, user }) => {
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
          {/* <li>
            <NavLink to="/splash" exact={true} activeClassName="active">
              Splash
            </NavLink>
          </li> */}
          <li>
            {/* route needs user Id */}
            <NavLink to={`/artists/`} exact={true} activeClassName="active">
              Artists
            </NavLink>
          </li>
          {/* <li> */}
            {/* route needs user Id */}
            {/* <NavLink to='/upload/' exact={true} activeClassName="active">
              Upload
            </NavLink>
          </li> */}
          <li>
            {user.id ? (
              <LogoutButton setAuthenticated={setAuthenticated} />
            ) : (
              <LoginModal setAuthenticated={setAuthenticated}/>
            )}
          </li>
        </ul>
        <form method="post">
          <NavSearch />
        </form>
        {user.id && (
          <NavLink className="navbar__menu" to={`/artists/${user.id}`}>
            <img src={user.profileImageUrl} />
            <div>{user.username}</div>
          </NavLink>
        )}
      </div>
    </nav>
  );
}

export default NavBar;
