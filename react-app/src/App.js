import React, { useState, useEffect } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { useDispatch } from "react-redux";
import Splash from "./components/splash/Splash";
import Header from "./components/splash/Header";
import { authenticate } from "./services/auth";
import RoutesContainer from './RoutesContainer';
import { loadUser } from './store/actions/signupActions';
import ProtectedRoute from "./components/auth/ProtectedRoute";

function App() {
  const [authenticated, setAuthenticated] = useState(false);
  const [loaded, setLoaded] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    (async() => {
      const userId = localStorage.getItem("user_id");
      if (userId) {
        const user = await authenticate();
        if (!user.errors) {
          setAuthenticated(true);
        }
        (async () => {
          await dispatch(loadUser(userId));
          setLoaded(true);
        })()
      } else {
        setLoaded(true);
      }
    })();
  }, [dispatch, setAuthenticated]);

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
            <ProtectedRoute
              authenticated={authenticated}
              setAuthenticated={setAuthenticated}
              render={(props) => <RoutesContainer {...props} setAuthenticated={setAuthenticated} />}
            >
            </ProtectedRoute>
        </Route>
      </Switch>

    </BrowserRouter>
  );
}

export default App;
