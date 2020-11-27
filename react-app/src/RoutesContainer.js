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
      {/* <Switch> */}
        <Route
          path="/example"
          // exact={true}
          authenticated={authenticated}
        >
          <Example/>
        </Route>
        <Route
          path="/home"
          exact={true}
          authenticated={authenticated}
        >
          <Home/>
        </Route>
      {/* </Switch> */}
    </>
  )

}


export default RoutesContainer;
