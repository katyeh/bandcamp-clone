import React from 'react';
import { useSelector } from 'react-redux';
import NavBar from './NavBar';

const NavBarContainer = ({setAuthenticated}) => {
  const user = useSelector(state => state.user);
  return ( 
    <NavBar setAuthenticated={setAuthenticated} user={user}/>
  );
}
 
export default NavBarContainer;