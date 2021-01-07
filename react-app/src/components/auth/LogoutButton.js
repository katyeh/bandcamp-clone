import React from "react";
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { logout } from "../../services/auth";
import { destroySessionAction } from '../../store/reducers/rootReducer';

const LogoutButton = ({ setAuthenticated }) => {
  const dispatch = useDispatch();
  const history = useHistory();

  const onLogout = async (e) => {
    await logout();
    setAuthenticated(false);
    dispatch(destroySessionAction());
    history.push("/splash")
  };

  return <input className="navbar__logout"onClick={onLogout} value="Logout" readOnly/>;
};

export default LogoutButton;
