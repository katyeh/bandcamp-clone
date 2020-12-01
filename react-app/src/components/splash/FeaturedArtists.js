import React, { useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { getAllArtists } from "../../store/actions/artists";
import { useHistory } from 'react-router-dom';

// function shuffle(array) {
//   var currentIndex = array.length, temporaryValue, randomIndex;

//   // While there remain elements to shuffle...
//   while (0 !== currentIndex) {

//     // Pick a remaining element...
//     randomIndex = Math.floor(Math.random() * currentIndex);
//     currentIndex -= 1;

//     // And swap it with the current element.
//     temporaryValue = array[currentIndex];
//     array[currentIndex] = array[randomIndex];
//     array[randomIndex] = temporaryValue;
//   }

//   return array;
// }

// Used like so
// var arr = [2, 11, 37, 42];
// shuffle(arr);
// console.log(arr);


const FeaturedArtists = () => {
  const dispatch = useDispatch()
  const artists = useSelector(state => state.artists);
  const artistsValues = Object.values(artists);
  const artistValues = artistsValues.slice(0, 4)
  const history = useHistory();

  console.log('ARTISTS:', artistValues)
  useEffect(() => {
    dispatch(getAllArtists())
  }, [])
  return (
    <div className="featured-artists__container">
      <div className="featured-artists__div">
        <h1>Featured Artists</h1>
      </div>
      <div className="featured-artists__grid">

        {artistValues.map((artist) => {
          return (
          <div className="featured-artists__grid-item">
            <div>
              <img onClick={() => history.push(`/artists/${artist.id}`)} className="featured-artist__pic" src={artist.profile_image_url}></img>
            </div>
            <div className="featured-artist__info">
              <h3>{artist.name}</h3>
              <p>{artist.bio.substring(0, 100) + "..."}</p>
            </div>
          </div>
          )
        })}
      </div>
    </div>
  )
}

export default FeaturedArtists;
