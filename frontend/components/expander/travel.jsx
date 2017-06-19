import React from 'react';

const Travel = () => {

  return (
    <div className='expander-element'>
      <div className='expander-item'>
        <img className='travel' src={window.roadMap}></img>
        <h3>Travel</h3>
          <p>
            <strong>SIGN IN </strong> and create a customized profile including your current location.
          </p>
          <p>
            <strong>LOCATE</strong> a nearby destination or dream big and search across the country.
          </p>
          <p>
            <strong>EXPERIENCE</strong> your perfect getaway or your next hometown.
          </p>
          <div className='clearfix' />
        <div className='text-block'>
          <p>
            <strong>Froliq</strong> gives individuals the ability to travel freely.
            It was created for those who may not know where they'd like to settle,
            and may not have the means to travel before finding a job. With Froliq,
            simply create a profile and search for new locations to explore.
          </p>
        </div>
      </div>
    </div>
  );

};

export default Travel;
