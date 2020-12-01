import React, { useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { getAllArtists } from "../../store/actions/artists";

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
  console.log('ARTISTS:', artistsValues)
  useEffect(() => {
    dispatch(getAllArtists())
  }, [])
  return (
    <div className="featured-artists__container">
      <div className="featured-artists__div">
        <h1>Featured Artists</h1>
      </div>
      <div className="featured-artists__grid">
        <div className="featured-artists__grid-item">
          <div>
            <p>Picture here</p>
          </div>
          <div className="featured-artist__info">
            <h3>Mozart</h3>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Soluta doloremque perspiciatis autem omnis!</p>
          </div>
        </div>
        <div className="featured-artists__grid-item">
          <div>
            <p>Picture here</p>
          </div>
          <div className="featured-artist__info">
            <h3>Lady Gaga</h3>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Soluta doloremque perspiciatis autem omnis!</p>
          </div>
        </div>
        <div className="featured-artists__grid-item">
          <div>
            <p>Picture here</p>
          </div>
          <div className="featured-artist__info">
            <h3>Blink 182</h3>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Soluta doloremque perspiciatis autem omnis!</p>
          </div>
        </div>
        <div className="featured-artists__grid-item">
          <div>
            <p>Picture here</p>
          </div>
          <div className="featured-artist__info">
            <h3>Drake</h3>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Soluta doloremque perspiciatis autem omnis!</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default FeaturedArtists;
