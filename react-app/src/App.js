import React, { useState, useEffect } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import LoginForm from "./components/auth/LoginForm";
import SignUpForm from "./components/auth/SignUpForm";
import NavBar from "./components/NavBar";
import Splash from "./components/splash/Splash"
import ProtectedRoute from "./components/auth/ProtectedRoute";
import Player from "./components/player/Player";
import Upload from "./components/upload/Upload";
import UsersList from "./components/UsersList";
import Artist from "./components/Artist";
import { authenticate } from "./services/auth";

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
        <NavBar setAuthenticated={setAuthenticated} />
        <Player/>
        <Route path="/" exact={true}>
          <Splash>Splash</Splash>
        </Route>
        <Route path="/login" exact={true}>
          <LoginForm
            authenticated={authenticated}
            setAuthenticated={setAuthenticated}
          />
        </Route>
        {/* <Route path="/sign-up" exact={true}>
          <SignUpForm authenticated={authenticated} setAuthenticated={setAuthenticated} />
        </Route> */}
        <ProtectedRoute path="/users" exact={true} authenticated={authenticated}>
          <UsersList/>
        </ProtectedRoute>
        <ProtectedRoute path="/artists/:artistId" exact={true} authenticated={authenticated}>
          <Artist/>
        </ProtectedRoute>
        <ProtectedRoute path="/upload" exact={true} authenticated={authenticated}>
          <Upload/>
        </ProtectedRoute>
    </BrowserRouter>
  );
}

export default App;
