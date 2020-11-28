import React from 'react';
import Section from '../home/Section';


const Home = ({tracks}) => {
  return (
    <div className="home">
      <div className="home__contents">
        <main className="home__main">
          <Section tracks={tracks.new} title="New" subtitle="New music by various artists."/>
          <Section tracks={tracks.random_picks} title="Random Picks" subtitle="Dive in and explore!"/>
          <Section tracks={tracks.trending} title="Trending" subtitle="What's hot right now."/>
          {/* <Section tracks={tracks} title="Suggestion" subtitle="Suggested music based on your likes."/> */}
        </main>
        <aside className="home__sidemenu">
          Aside
        </aside>
      </div>
    </div>
  )
}

export default Home;
