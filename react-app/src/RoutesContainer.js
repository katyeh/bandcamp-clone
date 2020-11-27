import React, { useState } from 'react';
import { Switch, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import HomeContainer from './components/home/HomeContainer';
import Player from './components/player/Player';




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
          <HomeContainer/>
        </Route>
      </Switch>
    </>
  )

}


export default RoutesContainer;
