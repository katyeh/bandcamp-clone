import React, { useState, useEffect } from "react";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import LoginForm from "./components/auth/LoginForm";
import SignUpForm from "./components/auth/SignUpForm";
import NavBar from "./components/NavBar";
import Splash from "./components/splash/Splash";
import Header from "./components/splash/Header";
import ProtectedRoute from "./components/auth/ProtectedRoute";
import Player from "./components/player/Player";
import Upload from "./components/upload/Upload";
import UsersList from "./components/UsersList";
import User from "./components/User";
import Home from "./components/home/Home";
import { authenticate } from "./services/auth";
import { getAlbum } from './actions/playerActions'

function App() {
  const [authenticated, setAuthenticated] = useState(false);
  const [loaded, setLoaded] = useState(false);
  const dispatch = useDispatch();
  const [tracks, setTracks] = useState([
    {
      'title': 'Best I Ever Head',
      'mp3_url': 'https://busker2.s3.amazonaws.com/songs/drake/Best+I+Ever+Had.mp3',
      'lyrics': '<<URL HERE>>',
      "album_id": 6,
      "artist_id": 2
    },
    {
      'title': 'Farandulera',
      'mp3_url': 'https://busker2.s3.amazonaws.com/songs/maluma/Farandulera+Maluma+Letra.mp3',
      'lyrics': '<<URL HERE>>',
      'album_id': 7,
      'artist_id': 5
    },
    {
      'title': 'vamos a pasarla bien',
      'mp3_url': 'https://busker2.s3.amazonaws.com/songs/maluma/vamos+a+pasarla+bien+maluma+letra.mp3',
      'lyrics': '<<URL HERE>>',
      'album_id': 8,
      'artist_id': 5
    },
    {
      'title': 'Beautiful, Dirty, Rich',
      'mp3_url': 'https://busker2.s3.amazonaws.com/songs/ladygaga/Lady+Gaga+-+Beautiful%2C+Dirty%2C+Rich.mp3',
      'lyrics': '<<URL HERE>>',
      'album_id': 9,
      'artist_id': 6
    }
  ])
  const [currentTrackIndex, setCurrentTrackIndex] = useState(0);


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
        <Route path="/" exact={true}>
          <Splash>Splash</Splash>
          <Header setAuthenticated={setAuthenticated} />
        </Route>
        <Player
        currentTrackIndex={currentTrackIndex}
        setCurrentTrackIndex={setCurrentTrackIndex}
        tracks={tracks}
        />

        <ProtectedRoute path="/home" exact={true} authenticated={authenticated}>
          <Home />
          {/* <Redirect to={"/"} /> */}
        </ProtectedRoute>
        {/* <NavBar setAuthenticated={setAuthenticated} />
        <Route path="/login" exact={true}>
          <LoginForm
            authenticated={authenticated}
            setAuthenticated={setAuthenticated}
          />
        </Route>
        <Route path="/sign-up" exact={true}>
          <SignUpForm authenticated={authenticated} setAuthenticated={setAuthenticated} />
        </Route>
        <ProtectedRoute path="/users" exact={true} authenticated={authenticated}>
          <UsersList/>
        </ProtectedRoute>
        <ProtectedRoute path="/users/:userId" exact={true} authenticated={authenticated}>
          <User />
        </ProtectedRoute> */}
      </Switch>
    </BrowserRouter>
  );
}

export default App;
