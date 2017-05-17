import React from 'react';

class Hero extends React.Component {
  constructor(props) {
    super(props)

  }

  render() {
    return(
      <div className='hero'>
        <div className='hero-image'>
          <div className='hero-text'>
            <h4>Hero Text</h4>
          </div>
        </div>
      </div>
    )
  }
}

export default Hero;
