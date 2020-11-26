import React from 'react';
import { Switch, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import Home from './components/home/Home';
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
          <Home/>
        </Route>
      </Switch>
    </>
  )

}


export default RoutesContainer;
