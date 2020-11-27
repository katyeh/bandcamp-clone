import React, { useState, useEffect } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Splash from "./components/splash/Splash";
import Header from "./components/splash/Header";
import { authenticate } from "./services/auth";
import RoutesContainer from './RoutesContainer';

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
        <Route path='/*'>
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
