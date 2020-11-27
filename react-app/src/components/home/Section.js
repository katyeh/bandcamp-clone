import React from 'react';

const Section = ({title, subtitle}) => {
  return ( 
    <section className="section">
      <h2 className="section__title">{title}</h2>
      <h3 className="section__subtitle">{subtitle}</h3>
      <p className="section__contents">Stuff here</p>
    </section>
  );
}
 
export default Section;