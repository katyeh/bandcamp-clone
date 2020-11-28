import React from 'react';
import Track from './Track';

const Section = ({title, subtitle, tracks}) => {
  return ( 
    <section className="section">
      <h2 className="section__title">{title}</h2>
      <h3 className="section__subtitle">{subtitle}</h3>
      <div className="section__contents">
        {tracks.map(track => (
          <Track key={track.id}>
            <div className="track__image">
            </div>
          </Track>
        ))}
      </div>
    </section>
  );
}
 
export default Section;