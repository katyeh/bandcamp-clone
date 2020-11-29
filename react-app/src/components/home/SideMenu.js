import React from 'react';
import { NavLink } from 'react-router-dom';

const SideMenu = ({artists}) => {
  return ( 
    <div className="sidemenu">
      <div className="sidemenu__based-on-likes">
        <h5 className="sidemenu__title">Artists whom you liked their tracks</h5>
        {artists.based_on_likes && artists.based_on_likes.map(artist => (
          <NavLink to={`artists/${artist.id}`}>
            <div className="sidemenu__container">
              <img src={`${artist.profile_image_url}`} />
              <div className="sidemenu__artist-info">
                <div className="sidemenu__artist-name">{artist.name}</div>
                <div className="sidemenu__artist-username">{artist.username}</div>
              </div>
            </div>
          </NavLink>
        ))}
      </div>
    </div>
  );
}
 
export default SideMenu;