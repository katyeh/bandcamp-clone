import React from 'react';
import { Switch, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
// import HomeContainer from './components/home/HomeContainer';
import Home from './components/home/Home';
import Player from './components/player/Player';
import ArtistProfile from './components/ArtistProfile'
import Artist from './components/Artists'



function RoutesContainer({authenticated, setAuthenticated}) {


  return (
    <>
      <NavBar setAuthenticated={setAuthenticated}/>
      <Player/>
      <Switch>
        <Route
          path="/"
          exact={true}
          authenticated={authenticated}
        >
          <Home/>
        </Route>
        <Route path="/artists" exact={true}>
          <Artist />
        </Route>
        <Route path="/artists/:id" exact={true}>
          <ArtistProfile />
        </Route>
      </Switch>
    </>
  )

}


export default RoutesContainer;
