import React, { useState } from 'react';

const SearchBar = () => {
  const [query, setQuery] = useState("")

  // const handleInputChange = (e) => {
  //   query = e.target.value;
  //   setQuery
  // };

  return (
    <div className="search__div">
      <p>Come listen to awesome music, discover new artists, and donate so they can continue making new music.</p>
      <div class="search__container">
        <input type="text"></input>
        <div class="dropdown-content">
          <a href="#">Genre 1</a>
          <a href="#">Genre 2</a>
          <a href="#">Genre 3</a>
        </div>
      </div>
    </div>
  )
}

export default SearchBar;
