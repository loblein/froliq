import React from 'react';
import HeaderContainer from './header/header_container'
import HeroContainer from './hero/hero_container';
import Pitch from './pitch/pitch';
import FooterContainer from './footer/footer_container';

const App = (props) => (
  <div>
    <HeaderContainer />
    <HeroContainer />
    <Pitch />
    <FooterContainer />
  </div>
);

export default App;
