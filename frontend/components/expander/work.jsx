import React from 'react';

const Work = () => {

  return (
    <div className='expander-element'>
      <div className='expander-item'>
        <img className='work' src={window.searchResults}></img>
        <h3>Work</h3>
        <p>
          <strong>PERSONALIZE</strong> your profile and choose from a list of roles to match your skills or interests.
        </p>
        <p>
          <strong>REVIEW</strong> opportunities that align with your interests and select jobs that are most appealing.
        </p>
        <p>
          <strong>RATE</strong> your experiences with employers to share with the community.
        </p>
        <div className='clearfix' />
        <div className='text-block'>
          <p>
            <strong>Froliq</strong> finds opportunities that match the type of roles you wish to pursue.
            Results are filtered to show opportunities in the vicinity of your selected city.
          </p>
        </div>
      </div>
    </div>
  );

};

export default Work;
