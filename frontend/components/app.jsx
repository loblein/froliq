import React from 'react';
import HeaderContainer from './header/header_container';
import HeroContainer from './hero/hero_container';
import Pitch from './pitch/pitch';
import FooterContainer from './footer/footer_container';
import ExpanderSwitchContainer from './expander/expander_switch_container';
import ExpanderContainer from './expander/expander_container';

const App = (props) => (

  <div>
    <HeaderContainer />
    <HeroContainer />
    <ExpanderSwitchContainer />
    <ExpanderContainer />
    <Pitch />
    <FooterContainer />
  </div>
);

export default App;
