import React from 'react';

import Header from './Header';
import Hero from './Hero';
import Portfolio from './Portfolio';
import Courses from './Courses';
import Footer from './Footer';

import './styles/App.css';

function App() {
  return (
    <React.Fragment>
      <Header />
      <Hero />
      <Portfolio />
      <Courses />
      <Footer/>
    </React.Fragment>
  );
}

export default App;
