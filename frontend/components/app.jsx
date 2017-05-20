import React from 'react';
import HeaderContainer from './header/header_container'
import HeroContainer from './hero/hero_container';
import Pitch from './pitch/pitch';
import Footer from './footer/footer';

const App = (props) => (
  <div>
    <HeroContainer />
    <Pitch />
    <Footer />
  </div>
);

export default App;
