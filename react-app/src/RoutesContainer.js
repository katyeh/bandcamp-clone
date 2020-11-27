import React from 'react';
import { Switch, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import Home from './components/home/Home';
import Player from './components/player/Player';
<<<<<<< HEAD
import Artist from './components/ArtistProfile'
=======
import Example from './components/Example';
>>>>>>> a43646ed61ccc8a91d2d4494b42c28eb3e2353ce




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
<<<<<<< HEAD
        />
          <Home/>  
      </Switch>
=======
        >
          <Home/>
        </Route>
      {/* </Switch> */}
>>>>>>> a43646ed61ccc8a91d2d4494b42c28eb3e2353ce
    </>
  )

}


export default RoutesContainer;
