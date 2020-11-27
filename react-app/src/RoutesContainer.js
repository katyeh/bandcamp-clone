import React from 'react';
import { Switch, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import Home from './components/home/Home';
import Player from './components/player/Player';
import Example from './components/Example';




function RoutesContainer({authenticated, setAuthenticated}) {


  return (
    <>
      <NavBar setAuthenticated={setAuthenticated}/>
      <Player/>
      <Switch>
        <Route
          exact={true}
          path="/example"
        >
          <Example/>
        <Route
          path="/"
          exact={true}
          authenticated={authenticated}
        >
          <Home/>
        </Route>
        </Route>
      </Switch>
    </>
  )

}


export default RoutesContainer;
