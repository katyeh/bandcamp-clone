import React from "react";
import { logout } from "../../services/auth";
import { useHistory } from 'react-router-dom';

const LogoutButton = ({ setAuthenticated }) => {
  let history = useHistory();
  const onLogout = async (e) => {
    await logout();
    if (setAuthenticated) {
      setAuthenticated(false);
      history.push("/splash")
    }
  };

  return <input className="navbar__logout"onClick={onLogout} value="Logout" readOnly/>;
};

export default LogoutButton;
