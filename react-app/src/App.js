import React, { useState, useEffect, Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { useDispatch } from "react-redux";
import Splash from "./components/splash/Splash";
import Header from "./components/splash/Header";
import { authenticate } from "./services/auth";
import RoutesContainer from './RoutesContainer';
import ArtistProfile from './components/ArtistProfile'
import Artist from './components/Artists'
import { loadUser } from './store/actions/signupActions';

function App() {
  const [authenticated, setAuthenticated] = useState(false);
  const [loaded, setLoaded] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    (async() => {
      const user = await authenticate();
      if (!user.errors) {
        setAuthenticated(true);
      }
      const userId = localStorage.getItem("user_id");
      (async () => {
        await dispatch(loadUser(userId));
        setLoaded(true);
      })()
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

        <Route path='/'>
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
