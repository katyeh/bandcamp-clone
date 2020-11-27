import React, { useState, useEffect, Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Splash from "./components/splash/Splash";
import Header from "./components/splash/Header";
import { authenticate } from "./services/auth";
import RoutesContainer from './RoutesContainer';
import ArtistProfile from './components/ArtistProfile'
import Artist from './components/Artists'

function App() {
  const [authenticated, setAuthenticated] = useState(false);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    (async() => {
      const user = await authenticate();
      if (!user.errors) {
        setAuthenticated(true);
      }
      setLoaded(true);
    })();
  }, []);

  if (!loaded) {
    return null;
  }

  return (
    <BrowserRouter>
      <Switch>
        <Route path="/splash" exact={true}>
          <Header setAuthenticated={setAuthenticated} />
          <Splash>Splash</Splash>
        </Route>
<<<<<<< HEAD
        <Route path="/artists" exact={true}>
          <Artist />
        </Route>
        <Route path="/artists/:id" exact={true}>
          <ArtistProfile />
        </Route>
        <Route path='/home'>
=======
        <Route path='/'>
>>>>>>> a43646ed61ccc8a91d2d4494b42c28eb3e2353ce
          <RoutesContainer
            authenticated={authenticated}
            setAuthenticated={setAuthenticated}
            />
        </Route>
      </Switch>

    </BrowserRouter>
  );
}

export default App;
