import React from "react";
import { logout } from "../../services/auth";
import { useHistory } from 'react-router-dom';

const LogoutButton = ({ setAuthenticated }) => {
  let history = useHistory();
  const onLogout = async (e) => {
    await logout();
    setAuthenticated(false);
    history.push("/splash")
  };

  return <button onClick={onLogout}>Logout</button>;
};

export default LogoutButton;
