import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

function ArtistsList() {
  const [users, setArtists] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const response = await fetch("/api/users/");
      const responseData = await response.json();
      setArtists(responseData.users);
    }
    fetchData();
  }, []);

  const userComponents = users.map((user) => {
    return (
      <li key={user.id}>
        <NavLink to={`/users/${user.id}`}>{user.username}</NavLink>
      </li>
    );
  });

  return (
    <>
      <h1>Artist List: </h1>
      <ul>{userComponents}</ul>
    </>
  );
}

export default ArtistsList;
