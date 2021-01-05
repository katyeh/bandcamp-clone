import React, { useState, useEffect, useRef } from 'react';
import { useHistory } from 'react-router-dom';

const SearchBar = () => {
  const [display, setDisplay] = useState(false);
  const [trackresults, setResults] = useState("");
  const [search, setSearch] = useState("");
  const [trackOptions, setTrackOptions] = useState([]);
  const [albumOptions, setAlbumOptions] = useState([]);
  const [artistOptions, setArtistOptions] = useState([]);
  const wrapperRef = useRef(null);
  const history = useHistory();

  useEffect(() => {
    const trackres = [];
    const albumres = [];
    const artistres = [];
    const mainsearch = async() => {
      const searchresults = await fetch(`/api/search/tracks?searchterm=${search}`)
      const show = await searchresults.json()
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
        className="search__input"
        type="text"
        onClick={() => setDisplay(!display)}
        placeholder="Search for artists, tracks, albums"
        value={search}
        onChange={e => setSearch(e.target.value)}
      />
      {display && (
        <div className="autoContainer">
          <div>Tracks</div>
          {/* {trackOptions > 0 ? <div>Tracks</div> : null} */}
          {trackOptions
            .map((value, i) => {
              return (
                <div
                  onClick={() => history.push(`/artists/${value.artist_id}`)}
                  // onClick={() => updateResults(value.title)}
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
          {/* {albumOptions > 0 ? <div>Albums</div> : null} */}
          {albumOptions
            .map((value, i) => {
              return (
                <div
                  onClick={() => history.push(`/artists/${value.artist_id}`)}
                  // onClick={() => updateResults(value.title)}
                  className="option"
                  key={i}
                  tabIndex="0"
                >
              <span>{value.title}</span>
            </div>
            )
          })
          }

          {artistOptions.length > 0 ? <div>Artists</div> : null}
          {artistOptions
            .map((value, i) => {
              return (
                <div
                  onClick={() => history.push(`/artists/${value.id}`)}
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
      <div className="search__container">
        <SearchBar />
      </div>
    </div>
  )
}

export default SearchContainer;
