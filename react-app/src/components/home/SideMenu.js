import React from 'react';

const SideMenu = ({artists}) => {
  return ( 
    <div className="sidemenu">
      <div className="sidemenu__based-on-likes">
        <h5>Artists whom you liked their tracks</h5>
        {artists.based_on_likes && artists.based_on_likes.map(artist => (
          <div className="sidemenu__container">
            <img src={`${artist.profile_image_url}`} />
            <div>{artist.name}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
 
export default SideMenu;