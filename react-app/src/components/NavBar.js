import React from 'react';
import { NavLink } from 'react-router-dom';
import LogoutButton from './auth/LogoutButton';
import SearchIcon from '@material-ui/icons/Search';
import LoginModal from "./home/Home_LoginModal";

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
          <li>
            <NavLink to="/splash" exact={true} activeClassName="active">
              Splash
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
            {user.id ? (
              <LogoutButton setAuthenticated={setAuthenticated} />
            ) : (
              <LoginModal setAuthenticated={setAuthenticated}/>
            )}
          </li>
        </ul>
        <form method="post">
          <div className="navbar__search">
            <input type="text" placeholder="   Search" />
            <button type="submit">
              <div className="navbar__search-button"><SearchIcon /></div>
            </button>
          </div>
        </form>
        {user.id && (
          <div className="navbar__menu">
          <img src={user.profileImageUrl} />
          <div>{user.name}</div>
        </div>
        )}
      </div>
    </nav>
  );
}

export default NavBar;
