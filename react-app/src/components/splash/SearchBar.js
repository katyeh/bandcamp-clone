import React, { useState, useEffect, useRef } from 'react';

const SearchBar = () => {
  const [display, setDisplay] = useState(false);
  const [trackresults, setResults] = useState("");
  const [search, setSearch] = useState("");
  const [trackOptions, setTrackOptions] = useState([]);
  const [albumOptions, setAlbumOptions] = useState([]);
  const [artistOptions, setArtistOptions] = useState([]);
  const wrapperRef = useRef(null);

  useEffect(() => {
    const trackres = [];
    const albumres = [];
    const artistres = [];
    const mainsearch = async() => {
      const searchresults = await fetch(`/api/search/tracks`)
      // console.log(await searchresults.json())
      const show = await searchresults.json()
      // console.log(show.trackresults)
      console.log(show.artistresults)
      show.trackresults.map(value => trackres.push(value))
      show.albumresults.map(value => albumres.push(value))
      show.artistresults.map(value => artistres.push(value))
      setTrackOptions(trackres);
      setAlbumOptions(albumres);
      setArtistOptions(artistres);
      setResults(searchresults)
    }
    if (search !== "") {
      mainsearch()
    }
  }, [search]);

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

  const updateResults = result => {
    setSearch(result);
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

          <div>Tracks</div>
          {trackOptions
            // .filter(({ title }) => title.indexOf(search.toLowerCase()) > -1)
            .map((value, i) => {
              return (
                <div
                  onClick={() => updateResults(value.title)}
                  className="option"
                  key={i}
                  tabIndex="0"
                >
              <span>{value.title}</span>
            </div>
            )
          })
          }

          <div>Albums</div>
          {albumOptions
            // .filter(({ title }) => title.indexOf(search.toLowerCase()) > -1)
            .map((value, i) => {
              return (
                <div
                  onClick={() => updateResults(value.title)}
                  className="option"
                  key={i}
                  tabIndex="0"
                >
              <span>{value.title}</span>
            </div>
            )
          })
          }

          <div>Artists</div>
          {artistOptions
            // .filter(({ title }) => title.indexOf(search.toLowerCase()) > -1)
            .map((value, i) => {
              return (
                <div
                  onClick={() => updateResults(value.name)}
                  className="option"
                  key={i}
                  tabIndex="0"
                >
              <span>{value.name}</span>
            </div>
            )
          })
          }

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
