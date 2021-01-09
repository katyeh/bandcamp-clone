import React, { useState, useEffect, useRef } from 'react';
import { useHistory } from 'react-router-dom';
import SearchIcon from '@material-ui/icons/Search';

const NavSearch = () => {
  const [display, setDisplay] = useState(false);
  // const [trackresults, setResults] = useState("");
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
      // setResults(searchresults)
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

  return (
    <div ref={wrapperRef} className="navbar__search">
      <input
        className="navsearch__input"
        type="text"
        placeholder="Search"
        value={search}
        onClick={() => setDisplay(!display)}
        onChange={e => setSearch(e.target.value)}
      />
      <button type="submit">
        <div className="navbar__search-button"><SearchIcon /></div>
      </button>
      {display && (
        <div className="navsearch__container">
          <div>Tracks</div>
          {/* {trackOptions > 0 ? <div>Tracks</div> : null} */}
          {trackOptions
            .map((value, i) => {
              return (
                <div
                  onClick={() => {
                    history.push(`/artists/${value.artist_id}`)
                    setDisplay(!display)
                    setSearch("")
                  }}
                  // onClick={() => updateResults(value.title)}
                  className="navsearch__option"
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
                  onClick={() => {
                    history.push(`/artists/${value.artist_id}`)
                    setDisplay(!display)
                    setSearch("")
                  }}
                  // onClick={() => updateResults(value.title)}
                  className="navsearch__option"
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
                  onClick={() => {
                    history.push(`/artists/${value.id}`)
                    setDisplay(!display)
                    setSearch("")
                  }}
                  className="navsearch__option"
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
}

export default NavSearch;
