import React from "react";

const FeaturedArtists = () => {
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
