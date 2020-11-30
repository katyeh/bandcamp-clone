import React from 'react';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import AudioMotion from './AudioMotion';

const SideMenu = ({artists}) => {
  const user = useSelector(state => state.user);

  if (user.id) {
    return ( 
      <div className="sidemenu">
        <div className="sidemenu__based-on-likes">
          <h5 className="sidemenu__title">Artists whom you liked their tracks</h5>
          {artists.based_on_likes && artists.based_on_likes.map(artist => (
            <NavLink to={`artists/${artist.id}`} key={artist.id} >
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
        <div className="sidemenu__random-artists">
        <h5 className="sidemenu__title">Explore some more artists</h5>
          {artists.random_artists && artists.random_artists.map(artist => (
              <NavLink to={`artists/${artist.id}`} key={artist.id}>
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
  } else {
    return <AudioMotion />
  }
  
}
 
export default SideMenu;