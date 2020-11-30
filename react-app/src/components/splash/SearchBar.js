import React, { useState, useEffect, useRef } from 'react';

const SearchBar = () => {
  const [display, setDisplay] = useState(false);
  const [options, setOptions] = useState([]);
  const [search, setSearch] = useState("");
  const wrapperRef = useRef(null);

  useEffect(() => {
    const pokemon = [];
    const promises = new Array(20)
      .fill()
      .map((v, i) => fetch(`https://pokeapi.co/api/v2/pokemon-form/${i + 1}`));
    Promise.all(promises).then(pokemonArr => {
      return pokemonArr.map(value =>
        value
          .json()
          .then(({ name, sprites: { front_default: sprite } }) =>
            pokemon.push({ name, sprite })
          )
      );
    });
    setOptions(pokemon);
  }, []);

  useEffect(() => {
    window.addEventListener("mousedown", handleClickOutside);
    return () => {
      window.removeEventListener("mousedown", handleClickOutside);
    };
  });

  const handleClickOutside = event => {
    const { current: wrap } = wrapperRef;
    if (wrap && !wrap.contains(event.target)) {
      setDisplay(false);
    }
  };

  const updatePokeDex = poke => {
    setSearch(poke);
    setDisplay(false);
  };

  return (
    <div ref={wrapperRef} className="flex-container flex-column pos-rel">
      <input
        type="text"
        onClick={() => setDisplay(!display)}
        placeholder="Search for artists, tracks, albums"
        value={search}
        onChange={e => setSearch(e.target.value)}
      />
      {display && (
        <div className="autoContainer">
          {options
            .filter(({ name }) => name.indexOf(search.toLowerCase()) > -1)
            .map((value, i) => {
              return (
                <div
                  onClick={() => updatePokeDex(value.name)}
                  className="option"
                  key={i}
                  tabIndex="0"
                >
                  <span>{value.name}</span>
                  <img src={value.sprite} alt="pokemon" />
                </div>
              );
            })}
        </div>
      )}
    </div>
  )
};

const SearchContainer = () => {
  return (
    <div className="search__div">
      <p>Come listen to awesome music, discover new artists, and donate so they can continue making new music.</p>
      <div class="search__container">
        <SearchBar />
      </div>
    </div>
  )
}

export default SearchContainer;
