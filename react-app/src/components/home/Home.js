import React from 'react';
import Section from '../home/Section';

const Home = () => {
  return (
    <div className="home">
      <div className="home__contents">
        <main className="home__main">
          <Section title="Suggestion" subtitle="Suggested music based on your likes."/>
          <Section title="Trending" subtitle="What's hot right now."/>
          <Section title="New" subtitle="New music by various artists."/>
        </main>
        <aside className="home__sidemenu">
          Aside
        </aside>
      </div>
    </div>
  )
}

export default Home;
